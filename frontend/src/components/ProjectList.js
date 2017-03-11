import React from 'react';
import { Link } from 'react-router';

import styled from 'styled-components';

const Image = styled.img`
  max-width: 39%;
  max-height: 200px;
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: 15px;
  margin-top: 15px;
  display: inline-block;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dadada;
  clear: both;
`;

const Left = styled.div`
  float: left;
  width: 60%;
  text-align: center;
  margin-top: 25px;
`;

const DetailLink = styled.div`
  display:block;
`;

const Vote = styled.div`
  display: inline-block;
  float: left;
  width: 29%;
`;

const Text = styled.div`
  display: inline-block;
  width: 70%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #4e4e4e;
  margin-bottom: 15px;
`;

const Desc = styled.div`
  font-size: 12px;
  color: #4e4e4e;
`;

export default function({projects, upVote, cancelUpVote, upvoted}) {
  console.log(projects);

  return (
    <div>
      {Object.keys(projects).map((key, i) => {
        var hasImage = !!projects[key].imgurlink;
        console.log(projects[key].imgurlink);
        console.log(hasImage);
        return <div key={i}>
        <Wrapper>
          <Left>
            <Vote>
              <div>{projects[key].votes} Votes</div>
              {upvoted.indexOf(projects[key].id) < 0
              ? <button onClick={() => (upVote(projects[key].id))}>up vote</button>
              : <button onClick={() => (cancelUpVote(projects[key].id))}>take back</button>}
              <div>Phase: {projects[key].phase}</div>
            </Vote>
            <Text>
              <Link to={"/projects/" +projects[key].id} >
                <Title>{projects[key].title}</Title>
                <Desc>{projects[key].description}</Desc>
              </Link>
            </Text>


          </Left>
          <div>
            {
              hasImage &&
              <Image src={projects[key].imgurlink} />
            }
          </div>
        </Wrapper>
        <Divider />
      </div>
      })}
    </div>
  )
};
