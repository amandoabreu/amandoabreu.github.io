---
layout: post
title:  "Wordpress: Create a plugin that automatically creates publicly facing page"
date:   2117-05-25 12:00:00 +0200
author: Amando Abreu
categories: wordpress plugin page frontend user public
comments: true
image:
---
Creating a front-end page for a plugin without manually creating a page

Many times a developer wants a plugin to have a page in a specific url, e.g.: <code>site.com/plugin-page</code>, but to be forced to create a page and select a custom template isn't the best nor fastest way to do it, I will show you how to make this page available as soon as the plugin is activated, and gone when the plugin is deactivated.
This is useful for example for a "contest" type plugin, <code>site.com/contest</code>

To automatically create a page for a plugin, we need to add some query vars, then rewrite the URLs, and load a template based on the query vars, that's it!

Let's get into code, I will use OOP PHP.

First, I will create the following directory and structure inside `wp-content/plugins/`:
- `/plugin-with-page/`
  - `/includes/`
    - `plugin-with-page.class.php`
  - `/templates/`
    - `pwp.php`
  - `plugin-with-page.php`

The theory is the following:
`includes/plugin-with-page.class.php` contains the PHP class of the plugin, `plugin-with-page.php` contains the plugin metadata(name, etc, as WP plugins do), and instantiates a new object of the class. The class contains functions that register a query var/rewrite rules to make the template `templates/pwp.php` available under for example: `example.com/plugin-with-page`.

Inside `plugin-with-page.class.php` we have our class that contains the following:

{% highlight php %}
<?php
class pluginWithPage {
  public $pageName = "plugin-with-page"; // This will be the name/URL of the page, eg: example.com/plugin-with-page
  public function __construct(){
    $this->init();
  }

  public function init(){
    add_filter( 'query_vars', array($this, 'pwp_register_query_var' ));
    add_filter( 'template_include', array($this, 'pwp_template_include'), 1, 1); // Override normal template logic
    add_action( 'init', array($this, 'pwp_rewrite_rules' ));
  }

  private function pwp_rewrite_rules() { // Rewrite rules for frontend page
      add_rewrite_rule( $this->pageName . '/?$', 'index.php?' . $this->pageName . '=true', 'top' );
  }

  private function pwp_register_query_var( $vars ) { // query vars for rewrite rules
      $vars[] = $this->pageName;
      return $vars;
  }

  private function pwp_template_include($template)
  {
      global $wp_query; //Load $wp_query object
      @$page_value = $wp_query->query_vars[$this->pageName]; //Check for query var

      if (($page_value && $page_value == "true")) {
          $file = PWP_PLUGIN_PATH.'/templates/pwp.php';
          return $file;
      }

      return $template; //Load normal template when $page_value != "true" as a fallback
  }
}
{% endhighlight %}

What's happening here exactly?

`public $pageName = "plugin-with-page";`

This variable holds the value `plugin-with-page` which is the name or "slug" the page will have, and the page will be accessible via `example.com/plugin-with-page`. Every time you change this, you shold refresh permalinks manually.

The `init()` function adds all the filters and actions for the functions to be called to override the default template logic, and  registering custom query vars and rewrite rules.

`plugin-with-page.php` includes the plugin's name, URI, etc, as WP plugins do, and instantiates a new object of the class.
{% highlight php %}
<?php
/*
    Plugin Name: Plugin with page
    Plugin URI:
    Description:
    Version: 1.0.0
    Author: Amando Abreu
    Author URI:
    License:
*/
define( 'PWP_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
require('includes/plugin-with-page.class.php');
$pwp = new pluginWithPage();
{% endhighlight %}

`templates/pwp.php` will include any special functionality you want the user to see!

Permalinks should be refreshed when the plugin is activated, it would be possible to add functionality to do so automatically and have the plugin's slug saved in the database, but that's out of the scope of this write-up.
