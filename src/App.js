import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import "instantsearch.css/themes/algolia-min.css";
import React from "react";

import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-dom";
import "./App.css";

const searchClient = instantMeiliSearch(
  "https://search.newsrme.com",
  "i1OrThaLdbd6b98f555df8112c964675ed91c5df1300b656df1185395bd67d890189c441"
);

const App = () => (
  <div className="ais-InstantSearch">
    <InstantSearch indexName="videos" searchClient={searchClient}>
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </div>
);

const Hit = ({ hit }) => (
  <div key={hit.id}>
    <Highlight attribute="title" hit={hit} />
  </div>
);

export default App;
