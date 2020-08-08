import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  > * {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
  }
`;

const MSocialButtons: React.FC = () => {
  return (
    <Wrapper>
      {/* twitter */}
      <a
        className="twitter-share-button"
        href="https://twitter.com/intent/tweet"
      >
        Tweet
      </a>
      {/* hatena */}
      <a
        href="https://b.hatena.ne.jp/entry/"
        className="hatena-bookmark-button"
        data-hatena-bookmark-layout="basic-label-counter"
        data-hatena-bookmark-lang="ja"
        title="このエントリーをはてなブックマークに追加"
      >
        <img
          src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加"
          width="20"
          height="20"
          style={{ border: "none" }}
        />
      </a>
    </Wrapper>
  );
};

export default MSocialButtons;
