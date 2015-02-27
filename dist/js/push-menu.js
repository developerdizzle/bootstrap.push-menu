(function($) {
    $(function() {
        $('[data-toggle="push"]').each(function() {
            var $this = $(this);

            var $target = $($this.data('target') || $this.attr('href') || '#navbar');
            var direction = $this.data('direction') || 'left';
            
            $target.addClass('navbar-push').addClass('navbar-push-' + direction);
            
            var $canvas = $($this.data('canvas') ||  'body');
            $canvas.addClass('push-canvas');

            $this.on('click', function(e) {
                $this.toggleClass('active');
                if ($this.is('.fa-bars')) {
                    $this.toggleClass('fa-rotate-90');
                }
                $canvas.toggleClass('pushed-' + direction);
                $target.toggleClass('in');
            });
        });
    });
})(jQuery);

