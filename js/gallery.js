'use strict';

(function() {
  /*
   *  @constructor
   */
  var Gallery = function() {
    this.element = document.querySelector('.overlay-gallery');
    this._leftButton = this.element.querySelector('.overlay-gallery-control-left');
    this._rightButton = this.element.querySelector('.overlay-gallery-control-right');
    this._closeButton = this.element.querySelector('.overlay-gallery-close');
    this._onLeftButtonClick = this._onLeftButtonClick.bind(this);
    this._onRightButtonClick = this._onRightButtonClick.bind(this);
    this._onCloseClick = this._onCloseClick.bind(this);
    this._onEscapeButtonClick = this._onEscapeButtonClick.bind(this);
  };

  /**
   * Показ галереи
   */
  Gallery.prototype.show = function() {
    this.element.classList.remove('invisible');
    this._leftButton.addEventListener('click', this._onLeftButtonClick);
    this._rightButton.addEventListener('click', this._onRightButtonClick);
    this._closeButton.addEventListener('click', this._onCloseClick);
    document.addEventListener('keydown', this._onEscapeButtonClick);
  };

  /**
   * Сокрытие галереи
   */
  Gallery.prototype.hide = function() {
    this.element.classList.add('invisible');
    this._leftButton.removeEventListener('click', this._onLeftButtonClick);
    this._rightButton.removeEventListener('click', this._onRightButtonClick);
    this._closeButton.removeEventListener('click', this._onCloseClick);
    document.removeEventListener('keydown', this._onEscapeButtonClick);
  };

  Gallery.prototype._onLeftButtonClick = function() {

  };

  Gallery.prototype._onRightButtonClick = function() {

  };

  Gallery.prototype._onCloseClick = function() {
    this.hide();
  };

  Gallery.prototype._onEscapeButtonClick = function(evt) {
    if (evt.keyCode === 27) {
      this.hide();
    }
  };

  window.Gallery = Gallery;
})();
