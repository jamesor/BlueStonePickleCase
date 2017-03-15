import React, { Component } from 'react';

function makeSections(ary) {
  return ary.map(sec => {
    let paragraphs = sec.items.map(prg => <p>{prg}</p>);
    return (
      <section>
        <h2>{sec.head}</h2>
        {paragraphs}
      </section>
    )
  });
}

class App extends Component {
  render() {
    const DB = window.DB;
    const sections = makeSections(DB.sections);

    return (
      <div>
        <div itemscope itemtype="http://schema.org/Book" itemid="#record">
          <link itemprop="additionalType" href="http://schema.org/Product" />
          <h1 itemprop="name">{DB.title}</h1>
          <table summary="Bibliographic Details">
            <tr>
              <th>Author: </th>
              <td itemprop="author">{DB.author}</td>
            </tr>
          </table>
        </div>
        {sections}
      </div>
    );
  }
}

export default App;
