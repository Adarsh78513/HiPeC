const Openings =()=>{ 
    return(
        <div className="Openings-outer">
            <div className="Openings">
                <h1>Openings</h1>

                <h2><u>Immediate Openings for Full-time Research Assistants and UG/PG Student Projects</u></h2>
                <p>All the projects listed below are research projects. If you are interested in working on any of these projects, then you should be self-motivated and highly proficient in C/C++. Debugging skills will also be required, but knowing it a priori is not mandatory. Currently, all these projects are open for IIIT Delhi students (BTech and MTech) and full-time Research Assistants (RAs). If you are an undergraduate student, then you must have studied Data Structures and Algorithms (CSE102) and Advanced Programming (CSE201). MTech students must attend Foundations of Parallel Programming (CSE502) course to work on these projects. Some of these projects have more than one openings and could be registered as IP/Capstone/Thesis/Scholarly. Please contact us for more information.</p>

                <h3>1. Novel Extensions in HPC Runtimes (July 2021) [Two Openings]</h3>
                <p>Tasks based parallel programming models have gained a lot of popularity. They offer a high-level approach to creating parallelism by creating large numbers of lightweight tasks that can execute in parallel by using an underlying work-stealing runtime. This runtime maintains a pool of worker threads, each of which maintains a double-ended queue of tasks. When local deque becomes empty, worker becomes a thief and seeks a victim thread from which to steal work. This project aims to implement new extentions in a work-stealing runtime to improve its performance on modern multicore processors.</p>
                <img src="./fib.png" alt="" className="ResearchOpeningImage" width={"500px"}/>
                <img src="./ws.png" alt="" className="ResearchOpeningImage" width={"500px"}/>

                <h3>2. Extending O.S. to Support HPC Runtimes (July 2021) [One Opening]</h3>
                <p>Tasks based parallel programming models uses an underlying work-stealing runtime for dynamic load-balancing of tasks. This project aims to implement new extentions in the linux operating system to improve the performance of work-stealing runtime on modern multicore processors.</p>
            </div>

        </div>
    )
}

export default Openings;