/**
 * Created by sangampandey on 3/28/16.
 */

$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("GEKZ0tmnORLGW2N7bGtRLu8vJRe5AyrapFb6yust", "0QAV3xqp2oir0ymd7xQU4Ff2Al9LL9DUcF8jF2XB");

    var New = Parse.Object.extend("News");
    var News = Parse.Collection.extend({
        model: New
    });

    var NewsView =  Parse.View.extend({
        template: Handlebars.compile($('#news-tpl').html()),
        render: function(){
            var collection = { news: this.collection.toJSON() };
            this.$el.html(this.template(collection));
        }
    });

    var news = new News();
    news.fetch({
        success: function(news) {
            console.log(news);
            var newsView = new NewsView({ collection: news });
            newsView.render();
            $('.main-container').html(newsView.el);
        },
        error: function(news, error) {
            console.log(error);
        }
    });

});