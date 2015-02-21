(function($) {
    $(function() {
        $('[data-toggle="push"]').each(function() {
            var $this = $(this);

            var data = $this.data();
            var options = {
                target: '#navbar',
                direction: 'left',
                canvas: 'body'
            };
            
            $.extend(options, data);

            var $target = $(options.target);

            $target.addClass('navbar-push navbar-push-' + options.direction);
            
            var $canvas = $(options.canvas);
            $canvas.addClass('push-canvas');
            
            $this.on('click', function(e) {
                $this.toggleClass('active');
                if ($this.is('.fa-bars')) {
                    $this.toggleClass('fa-rotate-90');
                }
                $canvas.toggleClass('pushed-' + options.direction);
                $target.toggleClass('in');
                
                var pushed = $this.hasClass('active');
                
                var event = pushed ? 'pushed.bs.menu' : 'unpushed.bs.menu';
                
                $this.trigger(event, options);
            });
        });
    });
})(jQuery);

