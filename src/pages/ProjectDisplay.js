import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import { FaGithub } from 'react-icons/fa';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={project.image} />
            <p>
                <b>skills:</b>{project.skill}
            </p>
            {<FaGithub />}
        </div>
    );
}

export default ProjectDisplay;