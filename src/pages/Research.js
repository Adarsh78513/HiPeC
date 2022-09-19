import Collapsible from "../cpmponents/Collapsible";

const Research = () => {
    return (
        <div className="Research-outer">
            <div className="Research">
                <h1>Research</h1>

                <Collapsible 
                title='<div className="Research-topic-collapsible"><b>[SC 2021]:</b> S. Kumar, A. Gupta, V. Kumar, and S. Bhalachandra, <i><b>"Cuttlefish: Library for Achieving Energy Efficiency in Multicore Parallel Programs"</b></i>, in Proceedings of the International Conference for High Performance Computing, Networking, Storage and Analysis (SC&apos;21), St. Louis, MO, USA, November 2021 (to appear).</div>' 
                children='<div className="Research-abstract">
                <i><p>A low-cap power budget is challenging for exascale computing. Dynamic Voltage and Frequency Scaling (DVFS) and Uncore Frequency Scaling (UFS) are the two widely used techniques for limiting the HPC application’s energy footprint. However, existing approaches fail to provide a unified solution that can work with different types of parallel programming models and applications.</p></i>

                <i><p>This paper proposes Cuttlefish, a programming model oblivious C/C++ library for achieving energy efficiency in multicore parallel programs running over Intel processors. An online profiler periodically profiles model-specific registers to discover a running application’s memory access pattern. Using a combination of DVFS and UFS, Cuttlefish then dynamically adapts the processor’s core and uncore frequencies, thereby improving its energy efficiency. The evaluation on a 20-core Intel Xeon processor using a set of widely used OpenMP benchmarks, consisting of several irregular-tasking and work-sharing pragmas, achieves geometric mean energy savings of 19.4% with a 3.6% slowdown.</p></i>
                </div>'
                />

                <Collapsible 
                title='<div className="Research-topic-collapsible">
                        <p>[<b>HiPC 2020</b>]: V. Kumar, "<i><b>PufferFish: NUMA-Aware Work-stealing Library using Elastic Tasks</b></i>", in 27th IEEE International Conference on High Performance Computing, Data, and Analytics, Pune, India, December 2020.</p>
                    </div>' 
                children='<div className="Research-abstract">
                            <i><p>
                            Due to the challenges in providing adequate memory access to many cores on a single processor, Multi-Die and Multi-Socket based multicore systems are becoming mainstream. These systems offer cache-coherent Non-Uniform Memory Access (NUMA) across several memory banks and cache hierarchy to increase memory capacity and bandwidth. Random work-stealing is a widely used technique for dynamic load balancing of tasks on multicore processors. However, it scales poorly on such NUMA systems for memory-bound applications due to cache misses and remote memory access latency. Hierarchical Place Tree (HPT) is a popular approach for improving the locality of a task-based parallel programming model, albeit it requires the programmer to map the dynamically unfolding tasks over a NUMA system evenly. Specifying data-affinity hints provides a more natural way to map the tasks than HPT. Still, a scalable work-stealing implementation for the same is mostly unexplored for modern NUMA systems.
                            </p></i>
                            <i><p>
                            This paper presents PufferFish, a new async-finish parallel programming model and work-stealing runtime for NUMA systems that provide a close coupling of the data- affinity hints provided for an asynchronous task with the HPTs in Habanero C/C++ library (HClib). PufferFish introduces Hierarchical Elastic Tasks (HET) that improves the locality by shrinking itself to run on a single worker inside a place or puffing up across multiple workers depending on the work imbalance at a particular place in an HPT. We use a set of widely used memory-bound benchmarks exhibiting regular and irregular execution graphs for evaluating PufferFish. On these benchmarks, we show that PufferFish achieves a geometric mean speedup of 1.5x and 1.9x over HPT implementation in HClib and random work-stealing in CilkPlus, respectively, on a 32-core NUMA AMD EPYC processor.
                            </p></i>
                        </div>'
                />

                <Collapsible 
                title='<div className="Research-topic-collapsible">
                            [<b>EuroPar 2019</b>]: V. Kumar, "<i><b>Featherlight Speculative Task Parallelism</b></i>", in 25th International European Conference on Parallel and Distributed Computing, Lecture Notes in Computer Science (LNCS), Springer, Göttingen, Germany, August 201. 
                        </div>' 
                children='<div className="Research-abstract">
                        <i><p>
                        Speculative task parallelism is a widely used technique for solving search based irregular computations such as graph algorithms. Here, tasks are created speculatively to traverse different search spaces in parallel. Only a few of these tasks succeed in finding the solution, after which the remaining tasks are canceled. To ensure timely cancellation of tasks, existing frameworks either require programmer introduced cancellation checks inside every method in the call chain, thereby hurting the productivity, or provide limited parallel performance.
                        </p></i>
                        <i><p>
                        In this paper we propose Featherlight, a new programming model for speculative task parallelism that satisfies the serial elision property and doesn&apos;t require any task cancellation checks. We show that FeatherLight improves the productivity through a classroom based study. Further, to support Featherlight we present the design and implementation of a task cancellation technique that exploits runtime mechanisms already available within managed runtimes and achieves a geometric mean speedup of 1.6x over the popular Java Fork/Join framework on a 20 core machine.
                        </p></i>
                    </div>'
                />



                <Collapsible 
                title='<div className="Research-topic-collapsible">
                        [<b>IWOMP 2019</b>]: V. Kumar, A. Tiwari, and G. Mitra, "<i><b>HetroOMP: OpenMP for Hybrid Load Balancing Across Heterogeneous Processors</b></i>", in 15th International Workshop on OpenMP, Lecture Notes in Computer Science (LNCS), Springer, Auckland, New Zealand, September 2019 (to appear).
                    </div>' 
                children='<div className="Research-abstract">
                            <i><p>
                            The OpenMP accelerator model enables an efficient method of offloading computation from host CPU cores to accelerator devices. However, it leaves it up to the programmer to try and utilize CPU cores while offloading computation to an accelerator. In this paper, we propose HetroOMP, an extension of the OpenMP accelerator model that supports a new clause hetro which enables computation to execute simultaneously across both host and accelerator devices using standard tasking and work-sharing pragmas.
                            </p></i>
                            <i><p>
                            To illustrate our proposal for a hybrid execution model, we implemented a proof-of-concept work-stealing HetroOMP runtime for the heterogeneous TI Keystone-II MPSoC. This MPSoC has host ARM CPU cores alongside accelerator digital signal processor (DSP) cores. We present the design and implementation of the HetroOMP runtime and use several well-known benchmarks to demonstrate that HetroOMP achieves a geometric mean speedup of 3.6× compared to merely using the OpenMP accelerator model.
                            </p></i>



                        </div>'
                />

                <Collapsible 
                title='<div className="Research-topic-collapsible">
                        [<b>IPDPSW 2017</b>]: M. Grossman, V. Kumar, N. Vrvilo, Z. Budimlic, and V. Sarkar, "<i><b>A Pluggable Framework for Composable HPC Scheduling Libraries</b></i>", in Proceedings of IEEE International Parallel and Distributed Processing Symposium Workshops, ACM, Orlando, Florida, USA, May 2017. [<a href="./papers/ashes2017.pdf">paper</a>, <a href="./papers/ashes17-slides.pdf">slides</a>] 
                    </div>' 
                children='<div className="Research-abstract">
                            <i><p>
                            Driven by the increasing diversity of current and future HPC hardware and software platforms, the HPC community has seen a dramatic increase in research and development efforts into the composability of discrete software systems. While modularity is often desirable from a software engineering, quality assurance, and maintainability perspective, the barriers between software components often hide optimization opportunities. Recent examples of work in composable HPC software include GPU-Aware MPI, OpenMP’s target directive, Lithe, HCMPI, and MVAPICH’s unified communication runtime. These projects all deal with breaking down the walls between software or hardware components in order to achieve performance, programmability, and/or portability gains. However, they also generally focus on composing only specific types of HPC software and have limited extensability.
                            </p></i>
                            <i><p> 
                            In this paper, we present work on using a pluggable API framework on top of a "generalized work-stealing" runtime to achieve composability of communication, accelerator, and other HPC libraries. We motivate this work by the increasing heterogeneity of HPC hardware, software, and applications, and note that as heterogeneity increases many discrete software frameworks will need to cooperate within a single process. Our framework, called HiPER (a Highly Pluggable, Extensible, and Re-configurable scheduling framework for HPC) enables exactly this cooperation.
                            </p></i>
                            <i><p>
                            We demonstrate the programmability improvements enabled by the HiPER framework through the use of novel APIs which reduce programmer burden. We also present performance studies that demonstrate that through unified and asynchronous scheduling of composed software systems we can achieve performance improvements over hand-optimized benchmark.
                            </p></i>
                        </div>'
                />

                <Collapsible 
                title='<div className="Research-topic-collapsible">
                        [<b>IA<sup>3</sup> 2016</b>]: V. Kumar, K. Murthy, V. Sarkar, and Y. Zheng, "<i><b>Optimized Distributed Work-Stealing</b></i>", in Proceedings of the 6th International Workshop on Irregular Applications: Architectures and Algorithms, <a href="http://hpc.pnl.gov/IA3/IA3/Call_For_Papers.html"  target="_blank">IA<sup>3</sup></a>, ACM, Salt Lake City, Utah, USA, November 2016 (co-located with SC16). [<a href="./papers/ia3-kumar-2016.pdf">paper</a>, <a href="papers/slides_ia3_2016.pdf">slides</a>] 
                    </div>' 
                children='<div className="Research-abstract">
                            <i><p>
                            Work-stealing is a popular approach for dynamic load balancing of task-parallel programs. However, as has been widely studied, the use of classical work-stealing algorithms on massively parallel and distributed supercomputers introduces several performance issues. One such issue is the overhead of failed steals (communicating with a victim that has no work), which is far more severe in the distributed context than within a single SMP node. Due to the cost of inter node communication, it is critical to reduce the number of failed steals in a distributed context. Prior work has demonstrated that load-aware victim processor selection can reduce the number of failed steals, but not eliminate the failed steals completely.
                            </p> </i>
                            <i><p>
                            In this paper, we present two different load-aware implementations of distributed work-stealing algorithm in HabaneroUPC++ PGAS library - BaselineWS and SuccessOnlyWS. BaselineWS follows prior work in implementing a load-aware distributed work-stealing strategy. SuccessOnlyWS implements a novel load- aware distributed work-stealing strategy that overcomes failed attempts by introducing a new policy for moving work from busy to idle processors. In contrast to BaselineWS, SuccessOnlyWS also avoids querying the same processor multiple times with failed steals.We evaluate both BaselineWS and SuccessOnlyWS by using up to 12288 cores of Edison, a CRAY-XC30 supercomputer and by using dynamic irregular applications, as exemplified by the UTS and NQueens benchmarks. We demonstrate that SuccessOnlyWS provides performance improvements up to 7% over BaselineWS.	
                            </p></i>
                        </div>'
                />

                <Collapsible 
                title='<div className="Research-topic-collapsible">
                    [<b>PPPJ 2016</b>]: V. Kumar, J. Dolby, and S. M. Blackburn, "<i><b>Integrating Asynchronous Task Parallelism and Data-centric Atomicity</b></i>", at The 13th International Conference on Principles and Practices of Programming on the Java Platform: Virtual Machines, Languages, and Tools, <a href="http://pppj16.inf.usi.ch/pppj" target="_blank">PPPJ&apos;16</a>, Lugano, Switzerland, August 2016. [<a href="http://users.cecs.anu.edu.au/~steveb/downloads/pdf/ws-pppj-2016.pdf">paper</a>, <a href="./papers/slides_pppj16.pdf">slides</a>]
                </div>' 
                children='<div className="Research-abstract">
                        <i><p> 
                        Processor design has turned toward parallelism and heterogeneous cores to achieve performance and energy efficiency. Developers find high-level languages attractive as they use abstraction to offer productivity and portability over these hardware complexities. Over the past few decades, researchers have developed increasingly advanced mechanisms to deliver performance despite the overheads naturally imposed by this abstraction. Recent work has demonstrated that such mechanisms can be exploited to attack overheads that arise in emerging high-level languages, which provide strong abstractions over parallelism. However, current implementation of existing popular high-level languages, such as Java, offer little by way of abstractions that allow the developer to achieve performance in the face of extensive hardware parallelism. 
                        </p> <p>
                        In this paper, we present a small set of extensions to the Java programming language that aims to achieve both high performance and high productivity with minimal programmer effort. We incorporate ideas from languages like X10 and AJ to develop five annotations in Java for achieving asynchronous task parallelism and data-centric concurrency control. These annotations allow the use of a highly efficient implementation of a work-stealing scheduler for task parallelism. We evaluate our proposal by refactoring classes from a number of existing multithreaded open source projects to use our new annotations. Our results suggest that these annotations significantly reduce the programming effort while achieving performance improvements up to 30% compared to conventional approaches. 
                        </p></i>
                    </div>'
                />

                <Collapsible 
                title='<div className="Research-topic-collapsible">
                        [<b>OpenSHMEM 2016</b>]: M. Grossman, V. Kumar, Z. Budimlic, and V. Sarkar, "<i><b>Integrating Asynchronous Task Parallelism with OpenSHMEM</b></i>", at The 3rd workshop on OpenSHMEM and Related Technologies, <a href="http://www.csm.ornl.gov/workshops/openshmem2016/" target="_blank">OpenSHMEM 2016</a>, Baltimore, Maryland, USA, August 2016. [<a href="./papers/asyncshmem1.pdf">paper</a>, <a href="http://www.csm.ornl.gov/workshops/openshmem2016/Presentations/P19_Integrating_Asynchronous_Task_Parallelism_with_OpenSHMEM.pdf">slides</a>]  
                    </div>' 
                children='<div className="Research-abstract">
                            <i><p>
                                The Partitioned Global Address Space (PGAS) programming models combine shared and distributed memory features, providing the basis for high-performance and high-productivity parallel programming environments. Most current PGAS approaches use complex compiler transformations to translate the user code to native code. OpenSHMEM is a very widely used PGAS programming model that offers a library based approach. Currently, OpenSHMEM relies on other libraries (e.g., OpenMP) for harnessing node-level parallelism. This OpenSHMEM+X approach requires the expertise of a hero-level programmer and typically encounters bottlenecks on shared resources, long wait times due to load imbalances, as well as data locality problems. </p>
                                <p> In this paper, we introduce an AsyncSHMEM PGAS library that supports a tighter integration of shared and distributed memory parallelism than approaches based on OpenSHMEM+X. AsyncSHMEM integrates the OpenSHMEM library with a thread-pool-based work-stealing runtime. AsyncSHMEM aims to prepare OpenSHMEM for the next generation of HPC systems by making it more adaptive and taking advantage of asynchronous computation to hide data transfer latencies, interoperate with tasks, improve load balancing (both of communication and computation), and improve locality. In this paper we present the design and implementation of AsyncSHMEM, and demonstrate the performance of AsyncSHMEM by performing a scalability analysis of two 
                                benchmarks on the Titan supercomputer. Our experiments show that AsyncSHMEM is competitive with OpenSHMEM+OpenMP model when executing highly regular workloads, while it significantly outperforms it on highly event-driven applications. 
                            </p></i>
                        </div>'
                />

                <Collapsible 
                title='<div className="Research-topic-collapsible">
                            [<b>HPEC 2015</b>]: V. Kumar, A. Sbirlea, Z. Budimlic, D. Majeti and V. Sarkar, "<i><b>Heterogeneous Work-stealing across CPU and DSP cores</b></i>", at The 19th International Conference on High Performance Extreme Computing Conference, <a href="http://ieee-hpec.org/index.htm" target="_blank">HPEC 2015</a>, Waltham, MA, USA, September 2015. [<a href="./papers/kumar_hpec2015.pdf">paper</a>, <a href="./papers/slides_hpec2015.pdf">slides</a>] 
                        </div>' 
                children='<div className="Research-abstract">
                            <i> <p>Due to the increasing power constraints and higher and higher performance demands, many vendors have shifted their focus from designing high-performance computer nodes using powerful multicore general-purpose CPUs, to nodes containing a smaller number of general-purpose CPUs aided by a larger number of more power-efficient special purpose processing units, such as GPUs, FPGAs or DSPs. While offering a lower power-to-performance ratio, unfortunately, such heterogeneous systems are notoriously hard to program, forcing the users to resort to lower-level direct programming of the special purpose processors and manually managing data transfer and synchronization between the parts of the program running on general-purpose CPUs and on special-purpose processors.</p>

                            <p>In this paper, we present HC-K2H, a programming model and runtime system for the Texas Instruments Keystone II Hawking platform, consisting of 4 ARM CPUs and 8 TI DSP processors. This System-on-a-Chip (SoC) offers high floating-point performance with lower power requirements than other processors with comparable performance. We present the design and implementation of a hybrid programming model and work-stealing runtime that allows tasks to be created and executed on both the ARM and DSP, and enables the seamless execution and synchronization of tasks regardless of whether they are running on the ARM or DSP. The design of our programming model and runtime is based on an extension of the Habanero C programming system. We evaluate our implementation using task-parallel benchmarks on a Hawking board, and demonstrate excellent scaling compared to sequential implementations on a single ARM processor.</p></i>
                        </div>'
                />

                <Collapsible 
                title='<div className="Research-topic-collapsible">
                            [<b>PGAS 2014</b>]: V. Kumar, Y. Zheng, V. Cave, Z. Budimlic and V. Sarkar, "<i><b>HabaneroUPC++: a Compiler-free PGAS Library</b></i>", at The 8th International Conference on Partitioned Global Address Space Programming Models, <a href="http://nic.uoregon.edu/pgas14/index.php" target="_blank">PGAS 2014</a>, Eugene, Oregon, October 2014. [<a href="./papers/pgas14.pdf">paper</a>, <a href="./papers/slides_pgas14.pdf">slides</a>] 
                        </div>' 
                children='<div className="Research-abstract">
                            <i> <p>The Partitioned Global Address Space (PGAS) programming models combine shared and distributed memory features, providing the basis for high performance and high productivity parallel programming environments. UPC++ is a very recent PGAS implementation that takes a library-based approach and avoids the complexities associated with compiler transformations. However, this implementation does not support dynamic task parallelism and only relies on other threading models (e.g., OpenMP or pthreads) for exploiting parallelism within a PGAS place. </p>

                            <p>In this paper, we introduce a compiler-free PGAS library called Habanero-UPC++, which supports a tighter integration of intra-place and inter-place parallelism than standard hybrid programming approaches. The library makes heavy use of C++11 lambda functions in its APIs. C++11 lambdas avoid the need for compiler support while still retaining the syntactic convenience of language-based approaches. The  Habanero-UPC+ library implementation is based on a tight integration of the UPC++ library and the Habanero-C++ library, with new extensions to support the integration. The UPC++ library is used to provide PGAS communication and function shipping support using GASNet, and the Habanero-C++ library is used to provide support for intra-place work-stealing integrated with function shipping. We demonstrate the programmability and performance of our implementation using two benchmarks, scaled up to 6000 cores. The insights developed in this paper promise to further enhance the usability and popularity of PGAS programming models.
                            </p></i>
                        </div>'
                />

                <Collapsible 
                title='<div className="Research-topic-collapsible">
                            [<b>VEE 2014</b>]: V. Kumar, S. M. Blackburn and D. Grove, "<i><b>Friendly Barriers: Efficient Work-Stealing With Return Barriers</b></i>", at The 10th ACM SIGPLAN/SIGOPS International Conference on Virtual Execution Environments, <a href="http://vee2014.cs.technion.ac.il/" target="_blank">VEE 2014</a>, Salt Lake City, Utah, March 2014. [<a href="./papers/vee2014.pdf">paper</a>, <a href="./papers/slides_vee14.pdf">slides</a>]
                        </div>' 
                children='<div className="Research-abstract">
                                <i> <p> This paper addresses the problem of efficiently supporting parallelism within a managed runtime. A popular approach for exploiting software parallelism on parallel hardware is task parallelism, where the programmer explicitly identifies potential parallelism and the runtime then schedules the work. Work-stealing is a promising scheduling strategy that a runtime may use to keep otherwise idle hardware busy while relieving overloaded hardware of its burden. However, work stealing comes with substantial overheads. Recent work identified sequential overheads of work-stealing, those that occur even when no stealing takes place, as a significant source of overhead. That work was able to reduce sequential overheads to just 15%.</p>

                                <p> In this work, we turn to dynamic overheads, those that occur each time a steal takes place. We show that the dynamic overhead is dominated by introspection of the victim’s stack when a steal takes place. We exploit the idea of a low overhead return barrier to reduce the dynamic overhead by approximately half, resulting in total performance improvements of as much as 20%. Because, unlike prior work, we attack the overheads directly due to stealing and therefore attack the overheads that grow as parallelism grows, we improve the scalability of work-stealing applications. This result is complementary to recent work addressing the sequential overheads of work-stealing. This work therefore substantially relieves work-stealing of the increasing pressure due to increasing intranode hardware parallelism. 
                                </p></i>
                            </div>'
                />

                <Collapsible 
                title='<div className="Research-topic-collapsible">
                        [<b>OOPSLA 2012</b>]: V. Kumar, D. Frampton, S. M. Blackburn, D. Grove, and O. Tardieu, "<i><b>Work-Stealing Without The Baggage</b></i>," in Proceedings of the 2012 ACM SIGPLAN Conference on Object-Oriented Programming Systems, Languages & Applications (<a href="http://splashcon.org/2012/program/oopsla-research-papers">OOPSLA 2012</a>), Tucson, AZ, October 19-26, 2012, 2012. (<b>selected for <a href="http://www.sigplan.org/Newsletters/CACM/Papers" target="_blank">SIGPLAN Communications of ACM Research Highlights</a>, 2013</b>) [<a href="./papers/ws-oopsla-2012-1.pdf">paper</a>, <a href="./papers/oopsla2012.pdf">slides</a> <a href="http://cs.anu.edu.au/~vivek/ws-oopsla-2012/" target="_blank"> benchmarks </a>] 
                    </div>' 
                children='<div className="Research-abstract">
                            <i> <p> Work-stealing is a promising approach for effectively exploiting software parallelism on parallel hardware. A programmer who uses work-stealing explicitly identifies potential parallelism and the runtime then schedules work, keep- ing otherwise idle hardware busy while relieving overloaded hardware of its burden. Prior work has demonstrated that work-stealing is very effective in practice. However, work- stealing comes with a substantial overhead: as much as 2× to 12× slowdown over orthodox sequential code.</p>
                            <p>In this paper we identify the key sources of overhead in work-stealing schedulers and present two significant refinements to their implementation. We evaluate our work- stealing designs using a range of benchmarks, four different work-stealing implementations, including the popular fork-join framework, and a range of architectures. On these benchmarks, compared to orthodox sequential Java, our fastest design has an overhead of just 15%. By contrast, fork-join has a 2.3× overhead and the previous implementation of the system we use has an overhead of 4.1×. These results and our insight into the sources of overhead for work- stealing implementations give further hope to an already promising technique for exploiting increasingly available hardware parallelism.</p>
                            </i>
                        </div>'
                />
                
                <Collapsible 
                title='<div className="Research-topic-collapsible">
                            [<b>VMIL 2012</b>]: V. Kumar and S. M. Blackburn, "<i><b>Faster Work-Stealing With Return Barriers</b></i>", at The 6th workshop on Virtual Machines and Intermediate Languages, <a href="http://design.cs.iastate.edu/vmil/2012/" target="_blank">VMIL 2012</a>, Tucson, AZ, October 2012. [<a href="./papers/vmil2012_paper.pdf">paper</a>, <a href="./papers/vmil2012.pdf">slides</a>] 
                        </div>'
                children='<div className="Research-abstract">
                            <i> <p> Work-stealing is a promising approach for effectively exploiting software parallelism on parallel hardware. A programmer who uses work-stealing explicitly identifies potential parallelism and the runtime then schedules work, keep- ing otherwise idle hardware busy while relieving overloaded hardware of its burden. However, work-stealing comes with substantial overheads. Our prior work has demonstrated that using the exception handling mechanism of modern VMs and gathering the runtime information directly from the victims execution stack can significantly reduce these overheads. A return barrier is a mechanism for intercepting the popping of a stack frame, and thus is a powerful tool for optimizing mechanisms that involve scanning of stack state.</p>
                            <p> In this paper we identify the overhead associated with managing the work-stealing related information on a victim’s execution stack. We present the design and preliminary findings of using return barriers on a victim’s execution stack to reduce these overheads. We evaluate our design using classical work-stealing benchmarks. On these bench- marks, compared to our prior design, we are able to reduce the overheads by as much as 58%. These preliminary findings give further hope to an already promising technique of harnessing rich features of a modern VM inside a work-stealing scheduler. </p></i>
                        </div>'
                />
                <Collapsible 
                title='<div className="Research-topic-collapsible">
                        [<b>X10 2011</b>]: V. Kumar, D. Frampton, D. Grove, O. Tardieu, and S. M. Blackburn, "<i><b>Work-Stealing by Stealing States from Live Stack Frames of a Running Application</b></i>," at <a href="http://x10-lang.org/workshop/cfp/program.html" target="_blank">X10&apos; 11 Workshop</a> collocated with PLDI 2011, San Jose, CA, June 2011. [<a href="./papers/x10-2011ws.pdf" target="_blank">paper</a>, <a href="http://x10.sourceforge.net/documentation/papers/X10Workshop2011/Kumarx10ws.pdf" target="_blank">slides</a>]
                    </div>' 
                children='<div className="Research-abstract">

                        <i> <p>The use of a work stealing scheduler has become a popular approach for providing task parallelism. It is used in many modern parallel programming languages, such as Cilk and X10, which have emerged to address the concerns of parallel programming complexity on modern multicore architectures. </p>
                            <p>There are various challenges in providing an efficient implementation of work-stealing, but in any implementation it must be possible for the thief to access the execution state required to per- form the stolen task. The natural way to achieve this is to save the necessary state whenever a producer creates stealable work. While the ability to provide some degree of parallelism may dominate performance at scale, it is common for the vast majority of potentially stealable work to never actually be stolen, but instead processed by the producer itself. This indicates that to further improve performance we should minimize the overheads incurred in making work available for stealing. </p>
                            <p>We are not the only ones to make this observation, for example X10&apos;s current C++ work-stealing implementation stack-allocates state objects and lazily copies them to the heap to avoid unnecessary heap allocation during normal execution. In our context of a Java virtual machine, it is possible to extend this idea further and avoid stack allocating state objects, but instead allow thieves to ex- tract state directly from within stack frames of the producer. This is achieved by using state-map information provided by a cooperative runtime compiler, allowing us to drive down the cost of making state available for stealable work items. We discuss our design and preliminary findings for the implementation of our framework in- side X10 work-stealing runtime and the baseline compiler of Jikes RVM, a high-performance Java research virtual machine. </p> </i>
                        </div>'
                />

            </div>
            

        </div>
    );
}
export default Research;