block('content')(    
    elem('text')(
    content()(function () {
        return{
            block: 'fund',
            content: applyNext()
        }
    }))
)