require.config({
    paths: {
        jquery: 'jquery'
    }
});

require(['jquery'], function ($) {
    $('body').text('Hello World')
});