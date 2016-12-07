---
layout: page
title:  "Dynamically creating unique widget area on a page"
date:   2015-08-01 12:00:00 +0200
author: Amando Abreu
categories: wordpress php
comments: true
image: https://c7.staticflickr.com/8/7667/16973136358_1407846425_h.jpg
---
Sometimes we want to have a page with a unique widget area that won’t appear on all pages, like widgets in the sidebar do.

Read on to learn how I dynamically create a uniquely-named widget area per page.

I will be using the twentyfifteen page template as an example, but the code will work on any theme as long as you cup/paste the right snippet.

We will start by creating a new page template, let’s call it page_dynamic_widget.php


{% highlight ruby %}
<?php

/**
 * Template Name: Unique Widget Area
 */

get_header(); ?>

    <div id="primary" class="content-area dynamic-widget">
        <main id="main" class="site-main" role="main">

        <?php
        // Start the loop.
        while ( have_posts() ) : the_post();

            // Include the page content template.
            get_template_part( 'content', 'page' );

            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) :
                comments_template();
            endif;

        // End the loop.
        endwhile;
        ?>

                <!-- copy/paste this block where you want the widget to appear -->
                <?php if ( is_active_sidebar( 'widget-area-'.$post->post_name ) ) : ?>
                    <div class="unique-widget-area page-<?php echo $post->post_name; ?>">
                        <?php dynamic_sidebar( 'widget-area-'.$post->post_name ); ?>
                    </div>
        <?php endif; ?>
        </main><!-- .site-main -->
    </div><!-- .content-area -->

<?php get_footer(); ?>
{% endhighlight %}

The relevant part of the code is this one:

{% highlight ruby %}
<!-- copy/paste this block where you want the widget to appear -->
<?php if ( is_active_sidebar( 'widget-area-'.$post->post_name ) ) : ?>
     <div class="unique-widget-area page-<?php echo $post->post_name; ?>">
          <?php dynamic_sidebar( 'widget-area-'.$post->post_name ); ?>
     </div>
<?php endif; ?>
{% endhighlight %}

Then we need to add this somewhere in the functions.php file


{% highlight ruby %}
if (function_exists('register_sidebar')){
    // get only published pages with our custom template file
    $args = array(
        'meta_key' => '_wp_page_template',
    'meta_value' => 'page_dynamic_widget.php',
        'status' => 'publish'
    );
    $pages = get_pages($args);
    foreach($pages as $page){ // loop through all of them and register the sidebar
        register_sidebar(array(
            'name' => __($page->post_title." - widget area", 'twentyfifteen'),
            'description' => __('Unique widget area for page '.$page->post_title, 'twentyfifteen'),
            'id' => 'widget-area-'.$page->post_name,
            'before_widget' => '<div id="%1$s" class="%2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3>',
            'after_title' => '</h3>'
        ));
    }

}
{% endhighlight %}

And there you go, as soon as you create a page and assign it the correct template file, you will see a new widget area appear in the appearance > widgets page.