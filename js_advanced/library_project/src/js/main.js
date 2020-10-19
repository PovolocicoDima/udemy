import './lib/lib';
import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
});

// console.log($('button').html('hello'));