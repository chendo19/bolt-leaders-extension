ArticleEditor.add('plugin', 'leaders', {
    defaults: {
        api: 'http://127.0.0.1:8000/api',
        contentType: 'people'
    },
    start: async function() {
        const response = await fetch(`${this.opts.leaders.api}/contents?page=1&contentType=${this.opts.leaders.contentType}&status=published`)
        const dataJson = await response.json()
        const items = {}
        
        for (const leader in dataJson) {
            const item = {
                title: dataJson[leader].fieldValues.name,
                command: 'leaders.insert'
            }
            items[leader] = item
        }

        this.app.toolbar.add('leaders', {
            title: 'Leaders',
            icon: '<i class="fa fa-users"></i>',
            command: 'leaders.popup',
            params: items
        })
    },
    popup: function(params, button) {
        console.log(params, button)   

        this.app.popup.create('leaders', { items: params })
        this.app.popup.open({ button: button })
    },
    insert: function(params, button, name) {
        this.app.popup.close()
        console.log('Button:', button.params)

        this.app.editor.insertContent({
            html:  `<div class="item">
                        <a href="https://www.linkedin.com" class="item__link">
                            <div class="item__image" style="background-image: url('https://dummyimage.com/250x250/adadad/4a4a4a.png&text=Leader')">
                                <div class="social"><i class="icomoon-linkedin-logo"></i></div>
                            </div>
                            <div class="item__name">
                                <h5>${button.params.title}</h5>
                                <p>Leader title</p>
                            </div>
                        </a>
                    </div>
                    `
        })
    },
})