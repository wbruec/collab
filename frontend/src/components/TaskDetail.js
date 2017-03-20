import React from 'react';

import styled from 'styled-components';

// const Box = styled.div`
//   border: 1px solid #bbbbbb;
//   margin: 15px;
//   width: 32%;
//   display: inline-block;
// `;

const Title = styled.div`
  font-size: 36px;
  text-align: center;
`;
const Description = styled.div`
  font-size: 12px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
`;

const Creator = styled.div`
  font-size: 12px;
  background-color: #f3f3f3;
`;

export default function({task, takeTask, user}) {
  console.log(task);
  var assigned = '';
  var image = null;
  var member = false
  if(task) {
    assigned = task.assignee ? task.assignee : 'not assigned';
    image = task.imgurlink ? <Image src={task.imgurlink} /> : null;
    for(var i = 0; i < task.members.length; i++) {
      if(task.members[i] == user) {
        member = true;
      }
    }
  }
  // console.log(task.members);
  // console.log(task.members.map((member, i) => {
  //   console.log(member);
  // }));
  return (<div>
            {image}
            <Title>{task ? task.title : null}</Title>
            <Creator>creator: {task ? task.creator : null}</Creator>
            <Description>details: {task ? task.description : null}</Description>
            {assigned}
            members:
            {task ? task.members.map((member, i) => {
              return (
                <div key={i}>
                  {member}
                </div>
              )
            }) : null}
            {member ? null : <button onClick={takeTask}>take task</button>}
          </div>
  )
};
