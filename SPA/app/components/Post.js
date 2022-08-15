//Post individual, voy a maquetar textual, es mas rapido y despues le hago innerHtml al main que pida
export function Post(props) {
    //Deestructuro, en PostCard hay mas teoria del porque
    let {content, date, title} = props;
    let dateFormat = new Date(date).toLocaleString();
    
    return `
        <section class="post-page">
            <aside>
                <h2>${title.rendered}</h2>
                <time datetime="${date}"2020-11-12>${dateFormat}</time>
            </aside>
            <hr>
            <article>${content.rendered}</article>
        </section>
    `;
}