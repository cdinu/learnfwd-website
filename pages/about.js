import React, { Component } from 'react';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1>
          About
        </h1>
        <p>
          * TEAM
            - Founders
              - Cristian Dinu
              - Paul Balogh

            - Advisors
              - Angela McFarlane
              - Charles Cormack
              - Owen White

            - Team
              - Leontina Budrincă
              - Iulian Savin
              - Mara Predescu (intern)

            - Previous Employees
              - Theodor Văraru
              - Marius Petcu
              - Andrei Constantinescu
              - Dana Cotoran

          * [?] PARTNERS

          * JOBS
            - open positions (javascript developers, frontenders)

          * NEWS / NEWSLETTER
            - press? (find articles in the UK and reference them...)
              - [Publishing Perspectives](http://publishingperspectives.com/2013/10/romanias-readforward-angles-to-be-facebook-for-education/)
              - [EDUKWEST](http://edukwest.eu/overview-emerge-education-january-2015-cohort/)
              - [EdShelf](https://edshelf.com/tool/learn-forward/)
              - [Hondana](http://hondana.com.br/pub/eng/from-frankfurt-to-recife-books-in-2020/)
              -
            - attending meetings / conferences
        </p>
      </div>
    );
  }
}

Page.displayName = 'LfpAbout';

