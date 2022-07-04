ArticleEditor.add('plugin', 'widgets', {
    start: function() {
        this.app.toolbar.add('widgets', {
            title: 'Widgets',
            icon: '<i class="fa fa-magic"></i>',
            command: 'widgets.popup'
        });
    },
    popup: function(params, button) {
        this.app.popup.create('widgets', {
            items: {
                leaders: {
                    title: 'Leaders',
                    command: 'widgets.insert'
                },
                insights: {
                    title: 'Insights',
                    command: 'widgets.insert'
                },
                cases: {
                    title: 'Cases',
                    command: 'widgets.insert'
                }
            }
        });

        this.app.popup.open({ button: button });
    },
    insert: function(params, button, name) {
        this.app.popup.close();
        console.log('Button:', button)

        let widgetHtml = ''
        
        switch(button.name) {
            case 'leaders':
                widgetHtml = `<section class="section-container section-container--speakers">
                    <section class="experts">
                        <div class="container">
                            <div class="two-thirds-width text-centered animation fadeIn">
                                <h2>Our leaders</h2>
                            </div>
                            <div class="experts__list animation fadeIn">
                                
                            </div>
                        </div>
                    </section>
                </section>`
              break;
            case 'insights':
                widgetHtml = `<section class="section-container section-container--speakers">
                    <section class="experts">
                        <div class="container">
                            <div class="two-thirds-width text-centered animation fadeIn">
                                <h2>News & insights</h2>
                            </div>
                            <div class="experts__list animation fadeIn">
                                
                            </div>
                        </div>
                    </section>
                </section>`
              break;
              case 'cases':
                widgetHtml = `<section class="section-container section-container--speakers">
                    <section class="experts">
                        <div class="container">
                            <div class="two-thirds-width text-centered animation fadeIn">
                                <h2>Success Cases</h2>
                            </div>
                            <div class="experts__list animation fadeIn">
                                
                            </div>
                        </div>
                    </section>
                </section>`
              break;
          }

        this.app.editor.insertContent({
                html:  widgetHtml
            })
    }
});
