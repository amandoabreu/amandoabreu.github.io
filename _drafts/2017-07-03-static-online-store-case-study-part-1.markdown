---
layout: page
title:  "Static online store case study, part 1) The site"
date:   2017-03-07 12:00:00 +0200
author: Amando Abreu
categories:
comments: true
newsletter: true
image: 
---
## Goals
- Have an online dropshipping shop based in Portugal running as a static site through amazon S3
- Generating at least enough revenue to be self-sufficient(Covering domain, hosting, advertising, and content creation).
- Collect emails for newsletters(mailchimp).
- Traffic will come through facebook and adwords
- Blog for organic traffic, however, some articles will be optimized for conversions(sales or newsletter signups) and also be facebook/adwords campaigns.
- Very little maintenance and attention required

## Possible expected pitfalls
- Since I will be dropshipping, it might require some custom scripts to communicate to with the dropshippers, which may require a server, but it would be 100% only for customers that checkout, which isn't so bad.
- Portuguese bureaucracy
- Customer trust

# Step 1) The website


## Infrastructure
Since I want to avoid having a "back-end" mostly to cut down on costs of a server, all standard e-commerce platforms are out of the question, prestashop, magento, etc. I could heavily cache them, but I wanted to face the challenge of using a static site generator.

I chose [Hugo](https://gohugo.io/), and I wrote some scripts in PHP(I could rewrite them in Go, for reasons) to import products from an XML provided by a dropshipper I decided to test with.

I didn't use data files because at the time of writing I was quite limited on what I could do with them when it came time to paginate. So each article is a post of the archetype "product".

The site is on Amazon S3, served through cloudflare with "flexible SSL", meaning I have HTTPS for free, which is nice.

## Shopping cart
I used [snipcart](https://snipcart.com/).

<blockquote class="quote quote--left">
Lean, powerful HTML / JavaScript shopping cart
</blockquote>

Which means I can have my users checkout without having any server logic on my side, neat!

## Importing products

I wrote some scripts to import products from different providers, just means I need to make a class for each provider's specific system.

<div class="card">
  <h3 class="card__header">Import scripts</h3>
  <div class="card__accordion">
    <div class="card__accordion__title">Example class</div>
    <div class="card__accordion__content">
        {% highlight php %}
<?php
Class BodyBrandsForYou{
    public function __construct(){
        $this->url = "https://www.bodybrands4you.de/backend/export/index/export.csv?feedID=22&hash=55edabe386b40961e4a5cada30529d5a";
        $this->fields = array(
            "id" => 0,
            "titel" => 1,
            "beschreibung" => 2,
            "link" => 3,
            "bild_url" => 4,
            "ean" => 5,
            "steuer" => 6,
            "gewicht" => 7,
            "marke" => 8,
            "mpn" => 9,
            "zustand" => 10,
            "produktart" => 11,
            "preis" => 12,
            "versand" => 13,
            "standort" => 14,
            "currency" => 15,
            "availability" => 16,
            "inhalt" => 17,
            "verpackungseinheit" => 18,
            "variante_geschmack" => 19,
            "" => 20
        );

        $this->products = array(
            "GR310002-001" => array(
                "carousel" => true,
            ),
            "BBA942" => array(),
            "BB2718" => array(),
            "BT222303" => array(
                "carousel" => true,
            ),
            "BT10019010300" => array(),
            "BT10002030410" => array(
                "featured" => true,
            ),
            "HE4260121152828" => array(),
            "MSSL7226" => array(
                "featured" => true,
            ),
            "OF12E58K" => array(
                "carousel" => true,
            ),
            "MSBI7243" => array(),
            "BB117601" => array(),

        );
    }


    public function saveImage($imgsrc, $name){
        $img = file_get_contents($imgsrc);
        $im = imagecreatefromstring($img);
        $width = imagesx($im);
        $height = imagesy($im);
//echo "width: ".$width." height: ".$height."<br/>";
        $ratio = $width/$height;
        $maxwidth = 460;
        $newwidth = $maxwidth;
        $newheight = $maxwidth / $ratio;
//echo "new width: ".$newwidth." newheiit: ".$newheight;
//echo $ratio;
        $thumb = imagecreatetruecolor($newwidth, $newheight);
        imagecopyresized($thumb, $im, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
        imagejpeg($thumb,'../static/images/products/'.$name.".jpg"); //save image as jpg
        imagedestroy($thumb);
        imagedestroy($im);
    }

    public function writeProduct($data){
        $content = "{". PHP_EOL;
        $content .= '    "id": "'.$data['id'].'",' . PHP_EOL;
        $content .= '    "title": "'.$data['title'].'",' . PHP_EOL;
        $content .= '    "description": "'. $data['description'] .'",' . PHP_EOL;
        $content .= '    "urlparam": "'.$data['urlparam'].'",' . PHP_EOL;
        $content .= '    "imgUrl": "'.$data['img'].'",' . PHP_EOL;
        $content .= '    "price": "'.$data['price'].'",' . PHP_EOL;
        $content .= '    "weight": "'.$data['weight'].'"';
        if($data['carousel'] == true){
            $content .= "," . PHP_EOL;
            $content .= '    "carousel": "true"' . PHP_EOL;
        } else {
            $content .=  PHP_EOL;
        }
        if($data['featured'] == true){
            $content .= "," . PHP_EOL;
            $content .= '    "featured": "true"' . PHP_EOL;
        } else {
            $content .=  PHP_EOL;
        }
        $content .= '}';
        $fp = fopen("../content/products/".$data['id'].'.md',"wb");
        fwrite($fp,$content);
        fclose($fp);
    }

    public function importProducts(){
        $data = file_get_contents($this->url);
        $rows = explode("\n",$data);
        $s = array();
        $numRow = 0;
        foreach($rows as $row) {

            if ($numRow == 0) {
                $header = str_getcsv($row, ";");
            } else {
                $s[$numRow] = explode(";", $row);
                $id = trim(str_replace(".", "-", str_replace('"', "", $s[$numRow][$this->fields['id']])));
                $title = trim(str_replace('"', "", $s[$numRow][$this->fields['titel']]));
                if(array_key_exists($id, $this->altproducts)) {
                    if ($s[$numRow][$this->fields['id']] !== '') {
                        $this->writeProduct(array(
                            'id' => $id,
                            'title' => $title,
                            'img' => '/images/products/'.$id.".jpg",
                            'description' => $s[$numRow][$this->fields['beschreibung']],
                            'price' => str_replace(",", ".", $s[$numRow][$this->fields['preis']]),
                            'weight' => $s[$numRow][$this->fields['gewicht']],
                            'featured' => isset($this->altproducts[$id]["featured"]) ? true : false,
                            'carousel' => isset($this->altproducts[$id]["carousel"]) ? true : false,
                            'urlparam' => '/products/'.$title.'/',
                        ));

                        $this->saveImage($s[$numRow][$this->fields['bild_url']], $id);
                    }
                }
            }

            $numRow++;
        }
    }
}
        {% endhighlight %}
    </div>
  </div>
</div>

Since there is no backend, the products array hold the IDs of the products I want to import, and tells Hugo if I want them in the carousel and/or featured. (I removed the carousel and will later test how it performs, but generally they [perform badly](https://erikrunyon.com/2013/07/carousel-interaction-stats/)).

The image resizing was needed as images came from the provider absolutely huge(5MB+).

A lot of things are still hardcoded and not very re-usable, didn't want to spend much time/effort on a dropshipper I wasn't gonna use(makes no sense to have descriptions in German when the store is in Portugal).

I could also extend a parent class with some shared methods.

This writes files named after the product ID to the products directory, and all the information is in JSON format.

I could also separate the data from the logic by placing the product IDs into a JSON file, and could have a Lambda function on AWS import whenever the file is updated(just an idea).

## Theme
I got an "e-commerce" layout for free from [w3layouts](https://w3layouts.com/), and made it into a hugo theme, I didn't like some things about it, so I spent a bit more time than I wanted on customization, the blog was also not part of it initially, so I had to make that too.

![theme](/assets/images/posts/pt-online-shop-case-study/n-air.png "n-air")

Became:

![theme](/assets/images/posts/pt-online-shop-case-study/semprefit.png "semprefit")
(One of the images has a black background because my image importer/resizer doesn't take into account the filetype, so what happened was a png image was turned to jpeg without taking into consideration the alpha channel, details to be taken care of later).

And added the blog section:

![theme](/assets/images/posts/pt-online-shop-case-study/blog.png "blog")

I get all my images from Pexels.

## Deployment
I run the import scripts, the product files are created, I then run the `hugo` command, and deploy the results to S3 using `s3_website` ruby gem.
(all these commands are in a single shell script so all I have to do is run `sh deploy.sh`).

Stay tuned for "part 2) Finding a dropshipper", by subscribing to my mailing list.
