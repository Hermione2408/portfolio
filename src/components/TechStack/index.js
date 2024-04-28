import React from 'react';
import styled from 'styled-components';

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`;

const TechStackItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  background: #f1f1f1;
  border-radius: 8px;
`;

const TechStackImage = styled.img`
  width: 20px;
  height: 20px;
`;

const TechStackName = styled.span`
  font-size: 14px;
`;

export const TechStack = ({ techStack }) => {
  return (
    <TechStackContainer>
      {techStack.map((tech, index) => (
        <TechStackItem key={index}>
          <TechStackImage src={tech.image} alt={tech.name} />
          <TechStackName>{tech.name}</TechStackName>
        </TechStackItem>
      ))}
    </TechStackContainer>
  );
};

