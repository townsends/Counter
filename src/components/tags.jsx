renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tag!</p>

    return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
}

render() { 
    return <div>
    { this.state.tags.length === 0 && "Please create a new tag!"}
    {this.renderTags()}
    </div>
}