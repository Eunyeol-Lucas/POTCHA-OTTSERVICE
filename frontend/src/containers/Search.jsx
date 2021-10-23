import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ContentsCard } from "../components/Prediction";
import styled from "styled-components";

const Search = ({ windowHeight }) => {
  const [searchList, setSearchList] = useState("");

  const params = useParams();
  const fetchData = async () => {
    if (params.query === " ") {
      return;
    }
    const body = {
      search_word: params.query,
    };
    try {
      const response = await axios.post(`/api/search`, body);
      console.log(response.data);
      setSearchList(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  return (
    <SearchField>
      <div
        style={{
          minHeight: `${windowHeight - 320}px`,
        }}
      >
        <div>
          <SearchTitle>'{params.query}' 검색 결과</SearchTitle>

          <div>
            <SearchContentCategory>MOVIE Contents</SearchContentCategory>
            <SearchCategoryBackground>
              {searchList?.movie?.map((movie) => (
                <Link to={`/detail/movie/${movie.id}/${movie.title}`}>
                  <ContentsCard
                    contents={movie}
                    key={movie.id}
                    category="movie"
                  />
                </Link>
              ))}
            </SearchCategoryBackground>
          </div>
        </div>

        <div>
          <div>
            <SearchContentCategory>TV Contents</SearchContentCategory>
            <SearchCategoryBackground>
              {searchList?.tv?.map((tv) => (
                <Link to={`/detail/tv/${tv.id}/${tv.title}`}>
                  <ContentsCard contents={tv} key={tv.id} category="movie" />
                </Link>
              ))}
            </SearchCategoryBackground>
          </div>
        </div>
      </div>
    </SearchField>
  );
};

export default Search;

const SearchField = styled.div`
  margin-top: 30px;
  height: 100%;
  background-color: #ffffff8d;
  border-radius: 25px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const SearchTitle = styled.h1`
  text-align: left;
  margin-left: 80px;
  position: relative;
  top: 50px;
  font-size: 35px;
`;
const SearchContentCategory = styled.h1`
  text-align: left;
  margin-left: 80px;
  margin-bottom: 20px;
  position: relative;
  top: 50px;
  font-size: 25px;
`;

const SearchCategoryBackground = styled.div`
  margin: 70px 70px 0 70px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
