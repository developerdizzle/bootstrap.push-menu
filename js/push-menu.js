(function($) {
    $(function() {
        $('[data-toggle="push"]').on('click', function(e) {
            var $this = $(this);
            
            var $target = $($this.data('target') || $this.attr('href'));
            var direction = $this.data('direction')
            var $canvas = $($this.data('canvas'));
            
            $this.toggleClass('active');
            if ($this.is('.fa-bars')) {
                $this.toggleClass('fa-rotate-90');
            }
            $canvas.toggleClass('pushed-' + direction);
            $target.toggleClass('in');
        });
    });
})(jQuery);

