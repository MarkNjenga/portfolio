import { useEffect, useState } from "react";

const ProjectCard = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);  // Added loading state

    useEffect(() => {
        fetch('http://localhost:3000/projects')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then((data) => {
                setProjects(data);
                setLoading(false);  // Set loading to false when data is fetched
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);  // Set loading to false even on error
            });
    }, []);  // Empty dependency array ensures effect runs once after initial render

    if (loading) {
        return <div>Loading...</div>;  // Show a loading message while fetching
    }

    return (
        <div className="project_card">
            {error && <div className="error-message">{error}</div>}  {/* Error message styling */}
            {projects.length === 0 ? (
                <div>No projects found.</div>  // Handle empty project list
            ) : (
                <div className="scroll-container">
                    <button className="scroll-button left" onClick={() => handleScroll(-1)}>&lt;</button>
                    <div className="project-list">
                        {projects.map((project) => (
                            <div className="project_item" key={project.id}>  {/* Add key for each item */}
                                <img src={project.img} alt={project.title} />
                                <h3 className="project_title">{project.title}</h3>
                                <p className="project_description">{project.description}</p>
                                <button>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">View Live</a> 
                                    {/* Add security attributes for external links */}
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-button right" onClick={() => handleScroll(1)}>&gt;</button>
                </div>
            )}
        </div>
    );

    // Function to handle scroll left or right
    function handleScroll(direction) {
        const container = document.querySelector('.project-list');
        const scrollAmount = container.offsetWidth; // Scroll by the width of the container
        container.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
}

export default ProjectCard;
