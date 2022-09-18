const Research = () => {
    return (
        <div className="Research-outer">
            <div className="Research">
                <h1>Research</h1>
                <button type="button" className="Research-topic-collapsible"><b>[SC 2021]:</b> S. Kumar, A. Gupta, V. Kumar, and S. Bhalachandra, <i><b>"Cuttlefish: Library for Achieving Energy Efficiency in Multicore Parallel Programs"</b></i>, in Proceedings of the International Conference for High Performance Computing, Networking, Storage and Analysis (SC'21), St. Louis, MO, USA, November 2021 (to appear).</button>

                <div className="abstract">
                    <h2>Abstract</h2>
                    <i><p>A low-cap power budget is challenging for exascale computing. Dynamic Voltage and Frequency Scaling (DVFS) and Uncore Frequency Scaling (UFS) are the two widely used techniques for limiting the HPC application’s energy footprint. However, existing approaches fail to provide a unified solution that can work with different types of parallel programming models and applications.</p></i>

                    <i><p>This paper proposes Cuttlefish, a programming model oblivious C/C++ library for achieving energy efficiency in multicore parallel programs running over Intel processors. An online profiler periodically profiles model-specific registers to discover a running application’s memory access pattern. Using a combination of DVFS and UFS, Cuttlefish then dynamically adapts the processor’s core and uncore frequencies, thereby improving its energy efficiency. The evaluation on a 20-core Intel Xeon processor using a set of widely used OpenMP benchmarks, consisting of several irregular-tasking and work-sharing pragmas, achieves geometric mean energy savings of 19.4% with a 3.6% slowdown.</p></i>
                </div>
            </div>
        </div>
    );
}

export default Research;