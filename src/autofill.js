/*
 * @category JS
 * @package Form auto-completion tool
 * @copyright 2012 Dmitry Sheiko (http://dsheiko.com)
 * @license MIT
 */
(function( window ) {
  "use strict";
  var document = window.document,
      fieldValueMap = {
            "title"       : "Mr."
          , "name"        : "quocnguyen"
          , "fullname"    : "quocnguyen"
          , "firstname"   : "quoc"
          , "lastname"    : "nguyen"
          , "email"       : "quocnguyen@clgt.vn"
          , "username"    : "quocnguyenclgt"
          , "password"    : "webzensux"
          , "confirmation": "webzensux"
          , "position"    : "Developer"
      };

    Object.keys( fieldValueMap ).forEach(function( name ){

        var input = document.querySelector( "form input[name='" + name + "']" )
						|| document.querySelector( "form select[name='" + name + "']" )
            || document.querySelector( "form textarea[name='" + name + "']" );

        input && input.type !== "hidden" && ( input.value = fieldValueMap[ name ] );
    });

})( window );
