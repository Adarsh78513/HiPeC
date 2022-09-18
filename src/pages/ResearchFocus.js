const ResearchFocus = () => {
    return (
        <div className="ResearchFocus-outer">
            <div className="ResearchFocus">
                <img src="./hipec.png" alt="" className="ResearchFocusImage" width={"700px"} style={{float:"right"}}/>
                <div className="ResearchFocusText">
                    <p>
                        The computer industry is at a significant crossroads. Constrained by heat and power usage, 
                        today, all computing devices are composed of processors with increasing numbers and a variety of cores 
                        (CPU, GPU, FPGA, and DSP). These processors offer little or no increase in clock speed per core. 
                        This new computing era has brought a twofold challenge in building software: how to expose the parallelism in the 
                        software without much of a hassle and how to exploit the performance of all the processing elements fully. Our 
                        research aims to solve these complex challenges by building parallel programming models and runtimes to increase 
                        productivity and performance.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ResearchFocus;

