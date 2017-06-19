import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class AccordionComponent extends ReactComponent {
    state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
        openArticleId: null
    }

    render() {
        return <OriginalComponent
            {...this.props}
            {...this.state}
            toggleOpenArticle = {this.toggleOpenArticle}
        />
    }

    toggleOpenArticle = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        const id = (this.state.openArticleId === openArticleId) ? null : openArticleId
        this.setState({
            openArticleId: id
        })
    }
}
