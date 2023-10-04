$.extend({
  toast: function(obj) {
    if ($('#toast-div').length) {
      return;
    }

    var title = obj.title;
    var showTime = obj.duration || 2000;
    var width = obj.width || 'auto';
    var height = obj.height || '16px';
    var position = obj.position || '';
    var backgroundColor = obj.backgroundColor || 'rgba(0, 0, 0, .7)';
    var textColor = obj.textColor || '#fff';
    var flag = obj.flag || true;
    var lineheight = obj.lineheight || height;

    if (position == 'bottom') {
      position = 'bottom: 48px;';
    } else if (position == 'middle') {
      position = 'top: calc(45% - 15px);';
    } else if (position == 'top') {
      position = 'top: 0px;';
    } else if (position === '') {
      position = 'top: 80%;';
    } else {
    }
    if (flag) {
      var content =
        "<div id='toast-div' style='position: fixed;display: none; z-index:999;font-size: 18px; " +
        position +
        ';left: 0;width:100%; height: ' +
        height +
        "; text-align: center'>";
    } else {
      var content =
        "<div id='toast-div' style='position: fixed; display: none;z-index:999; font-size: 14px; font-weight: 500; top: 0; left: 0;width:100%; height:100%; text-align: center'>";
    }
    content +=
      '<div id="toast-content" style="display: inline-block; width: ' +
      width +
      ';min-height: ' +
      height +
      ';padding: 8px;background-color: ' +
      backgroundColor +
      ';text-align: center;font-size: 14px; font-weight: 500;line-height: ' +
      lineheight +
      ';border-radius: 4px;color: ' +
      textColor +
      ';">' +
      title +
      '</div>';
    content += '</div>';
    $('body').append(content);
    $('#toast-div').fadeIn(200);
    setTimeout(function() {
      $('#toast-div').fadeOut(200);
    }, showTime);
    setTimeout(function() {
      $('#toast-div').remove();
    }, showTime + 300);
  }
});
