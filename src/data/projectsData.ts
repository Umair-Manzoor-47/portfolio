import { Project, ExperienceItem, EducationItem } from '../types';

export const PROJECTS_DATA: Project[] = [
  // 1. OTTERUS2D RUNTIME ENGINE (First Project)
  {
    id: 'otterus2d',
    title: 'Otterus2D Runtime Engine',
    badgeLabel: 'Otterus2D Engine',
    subtitle: 'Modular C++20 / OpenGL 4.5 Core System',
    shortSummary:
      'A modular systems runtime built from scratch in C++20 and OpenGL 4.5 Core with dynamic batch rendering, decoupled static libraries, and embedded Lua scripting.',
    category: 'systems',
    categoryLabel: 'Systems & Low-Latency',
    status: 'Active',
    year: '2024 – 2026',
    role: 'Author',
    coverImage: './media/otterus2d/otterus_mascot_512.png',
    bannerImage: './media/otterus2d/banner_editor_splash.png',
    architectureDiagram: './media/otterus2d/architecture.svg',
    architectureCaption: 'Otterus2D Architecture: Layered static libraries separating Editor, Core runtime, and Subsystems (Window, Rendering, Physics, Sound).',
    pillars: [
      {
        title: 'Dynamic Batching.',
        image: './media/otterus2d/CozyScene.gif',
        text: 'Engineered a modular C++20 / OpenGL 4.5 rendering pipeline that batches textured quads into shared vertex buffers, minimizing GPU draw calls and state changes.'
      },
      {
        title: 'Decoupled Static Libs.',
        image: './media/otterus2d/Otterus2D_SplashBanner.png',
        text: 'Organized the entire engine architecture into isolated static libraries with explicit interface boundaries: Renderer, Math, ECS, Audio, and Scripting.'
      },
      {
        title: 'Embedded Scripting.',
        image: './media/otterus2d/Otterus2D_AppIcon.png',
        text: 'Embedded Lua 5.3 via Sol3 to expose scene nodes, physics callbacks, and camera controls to external scripts without requiring engine recompilation.'
      }
    ],
    externalLinks: {
      github: 'https://github.com/Umair-Manzoor-47/Otterus2D',
      docs: 'https://github.com/Umair-Manzoor-47/Otterus2D-docs'
    },
    tags: ['C++20', 'OpenGL 4.5', 'EnTT ECS', 'Box2D', 'Lua 5.3', 'ImGui'],
    metrics: [
      { label: 'Graphics API', value: 'OpenGL 4.5 Core' },
      { label: 'Scripting Core', value: 'Lua 5.3 / Sol3' },
      { label: 'Physics', value: 'Box2D Integration' },
      { label: 'Architecture', value: 'Layered Static Libs' }
    ],
    deepDive: {
      overview:
        'Built entirely outside of work hours to master low-level systems programming and hardware graphics pipelines. Otterus2D organizes functionality into cleanly separated static libraries with explicit boundaries.',
      keyArchitecture: [
        {
          title: 'Dynamic Quad Batch Renderer',
          detail: 'Batches textured quads and primitives into dynamic vertex buffers, minimizing OpenGL state switches and draw calls.'
        },
        {
          title: 'Data-Oriented Entity Architecture',
          detail: 'Integrates EnTT for linear, cache-friendly iterations over decoupled Plain Data components.'
        },
        {
          title: 'Embedded Lua 5.3 Runtime',
          detail: 'Exposes entity management, camera controllers, and physics contact listener callbacks to Lua scripts via Sol3.'
        }
      ],
      technicalTakeaways: [
        'Documented extensively in a dedicated documentation repository.',
        'Built a complete desktop editor shell with docking panels, scene framebuffer viewports, and structured logging.'
      ]
    }
  },

  // 2. HOLT MATCHING ENGINE
  {
    id: 'holt',
    title: 'Holt',
    badgeLabel: 'Holt Engine',
    subtitle: 'Low-Latency HFT Matching Engine',
    shortSummary:
      'Ultra-low latency electronic matching engine built in C++20 for deterministic throughput, using wait-free SPSC ring buffers and zero dynamic heap allocations on the hot path.',
    category: 'systems',
    categoryLabel: 'Systems & Low-Latency',
    status: 'Active WIP',
    year: '2026',
    role: 'Author',
    coverImage: './media/holt/hero_terminal.svg',
    bannerImage: './media/holt/hero_terminal.svg',
    architectureDiagram: './media/holt/architecture.svg',
    architectureCaption: 'Holt Dataflow Pipeline: SPSC lock-free ingress, cache-aligned matching core, and zero-allocation intrusive order book.',
    pillars: [
      {
        title: 'Throughput.',
        image: './media/holt/pillar1_orderbook.svg',
        text: 'To achieve 1.48M matches per second, orders embed doubly linked list pointers for O(1) price-level operations. Price points are tracked as 64-bit fixed-point integers to eliminate IEEE-754 floating point imprecision.'
      },
      {
        title: 'Determinism.',
        image: './media/holt/pillar2_latency.svg',
        text: 'Tail latency spikes in matching engines are overwhelmingly caused by OS thread scheduling and heap allocator locks. Compiling under -fno-exceptions and pinning the matching thread to isolated CPU cores yields flat p99.9 latency under 420ns.'
      },
      {
        title: 'Cache Isolation.',
        image: './media/holt/pillar3_ringbuffer.svg',
        text: 'The ingress order queue is implemented as a wait-free single-producer single-consumer circular ring buffer. Head and tail atomic cursors are separated by alignas(128) byte boundaries, eliminating cacheline ping-pong between cores.'
      }
    ],
    externalLinks: {
      github: 'https://github.com/Umair-Manzoor-47/Holt'
    },
    tags: ['C++20', 'Lock-Free SPSC', 'Memory Pool', 'PMR', 'Cacheline Alignment'],
    metrics: [
      { label: 'Hot Path Allocations', value: '0 Bytes Heap' },
      { label: 'Queue Sync', value: 'Wait-Free SPSC' },
      { label: 'Order Cancellation', value: 'O(1) Intrusive' },
      { label: 'Cache Boundary', value: 'alignas(128)' }
    ],
    deepDive: {
      overview:
        'Engineered to achieve sub-microsecond determinism without OS lock contention or heap jitter. All structures are cache-aligned and pre-allocated before trading starts.',
      keyArchitecture: [
        {
          title: 'Wait-Free SPSC Queue',
          detail: 'Uses power-of-two ring buffer masking and 128-byte cursor separation to isolate producer and consumer cache lines, strictly eliminating false sharing.'
        },
        {
          title: 'Intrusive Memory Pool & PMR',
          detail: 'Guarantees zero dynamic memory allocations on the critical path using an embedded free-list pool and monotonic buffer resources.'
        },
        {
          title: 'O(1) Price-Time Priority Levels',
          detail: 'Order records embed doubly linked list pointers for constant-time queue insertions and cancellations at any price point.'
        },
        {
          title: 'Zero-Copy Event Bus',
          detail: 'Trade, fill, and reject events are packed into flat union records with nanosecond timestamps for low-overhead streaming.'
        }
      ],
      technicalTakeaways: [
        'Compiled under -fno-exceptions and strict compiler flags (-Wall -Wextra -Wpedantic).',
        'Avoids floating-point imprecision via fixed-point price representation (PRICE_SCALE = 10000).'
      ]
    }
  },

  // 3. MEM-ALLOCATOR
  {
    id: 'mem-allocator',
    title: 'Custom Memory Allocators',
    badgeLabel: 'Memory Allocators',
    subtitle: 'Deterministic Memory Management Suite',
    shortSummary:
      'High-performance custom memory allocators (Linear Bump, LIFO Stack with markers, Intrusive Free-List Pool, Tracking) eliminating runtime heap fragmentation.',
    category: 'systems',
    categoryLabel: 'Systems & Low-Latency',
    status: 'Completed',
    year: '2026',
    role: 'Author',
    coverImage: './media/mem-allocator/hero_visualizer.svg',
    bannerImage: './media/mem-allocator/hero_visualizer.svg',
    architectureDiagram: './media/mem-allocator/architecture.svg',
    architectureCaption: 'Allocator Suite: Linear Bump Arena, LIFO Stack with markers, and Intrusive Chunk Pool with zero metadata waste.',
    pillars: [
      {
        title: 'Arena Bumping.',
        image: './media/mem-allocator/pillar1_arena.svg',
        text: 'Sequential forward pointer bumping with std::align enforcement provides O(1) allocations taking 3-5 CPU clock cycles. Frame or per-request scratch memory is purged instantaneously via a zero-cost bulk pointer reset.'
      },
      {
        title: 'Stack Snapshots.',
        image: './media/mem-allocator/pillar2_stack.svg',
        text: 'Hierarchical Marker checkpoints snapshot buffer offsets so transient computational tasks can allocate freely and rewind (free_to_marker) with zero fragmentation or memory leaks.'
      },
      {
        title: 'Zero Metadata Waste.',
        image: './media/mem-allocator/pillar3_pool.svg',
        text: 'The fixed-size chunk pool embeds its singly linked free-list pointers directly inside unused block payloads. 100% of memory capacity is reserved for live data with zero external metadata overhead.'
      }
    ],
    externalLinks: {
      github: 'https://github.com/Umair-Manzoor-47/Mem-Allocator'
    },
    tags: ['C++20', 'Custom Allocators', 'Doctest', 'CMake', 'Raylib'],
    metrics: [
      { label: 'Bump Arena Alloc', value: 'O(1)' },
      { label: 'Stack Rewind', value: 'Marker Rollback' },
      { label: 'Pool Fragmentation', value: '0% External' },
      { label: 'Test Coverage', value: '100% Doctest' }
    ],
    deepDive: {
      overview:
        'General-purpose heap allocators suffer from unpredictable latency spikes and fragmentation. This suite provides deterministic alternatives tailored for high-throughput backend services and real-time execution loops.',
      keyArchitecture: [
        {
          title: 'Linear Bump Arena',
          detail: 'Sequential forward pointer bumping with std::align byte boundary enforcement and instantaneous bulk buffer resets.'
        },
        {
          title: 'LIFO Stack with Markers',
          detail: 'Supports hierarchical Marker snapshots and rewinds (free_to_marker) for transient per-task buffers.'
        },
        {
          title: 'Intrusive Free-List Pool',
          detail: 'Fixed-size chunk allocator storing pointers directly within unused blocks, achieving zero external metadata overhead.'
        },
        {
          title: 'STL-Compliant Tracking Wrapper',
          detail: 'Plugs directly into standard containers (std::vector) to record live vs peak byte metrics via thread-safe AllocatorStats.'
        }
      ],
      technicalTakeaways: [
        'Includes an interactive Raylib visualizer demonstrating alignment gaps, slot recycling, and buffer usage.',
        'Validated with unit tests covering alignment boundary corner-cases and arena exhaustion.'
      ]
    }
  },

  // 4. SCARY TEACHER PRODUCTION TITLES & AWS BACKEND
  {
    id: 'scary-teacher-titles',
    title: 'High-Scale Production Systems & AWS Backend',
    badgeLabel: 'Cloud Backend & Scale',
    subtitle: 'ZnK / GenITeam (50M+ Combined Users)',
    shortSummary:
      'Engineered cloud backend infrastructure on AWS for short video media streaming and optimized production performance systems across titles serving 50M+ users.',
    category: 'backend',
    categoryLabel: 'Backend & Production',
    status: 'Live (50M+ Users)',
    year: '2026',
    role: 'Software Engineer (ZnK)',
    coverImage: './media/scary-teacher/banner.jpg',
    bannerImage: './media/scary-teacher/banner.jpg',
    architectureDiagram: './media/scary-teacher/architecture.svg',
    architectureCaption: 'High-Scale AWS Pipeline: CloudFront CDN edge delivery, stateless video streaming services, and sub-10ms Redis caching.',
    pillars: [
      {
        title: 'Cloud Infrastructure.',
        image: './media/scary-teacher/screenshot1.jpg',
        text: 'Architected and integrated AWS cloud services for the Scary Teacher short drama/reels application, engineering resilient video feed endpoints, authentication flows, and high-concurrency user telemetry.'
      },
      {
        title: 'Scale & Concurrency.',
        image: './media/scary-teacher/banner.jpg',
        text: 'Shipped production features and live backend updates supporting high-scale consumer installations (50M+ combined downloads), ensuring uninterrupted service reliability during high-traffic live-ops.'
      },
      {
        title: 'Thermal & Frametime Limits.',
        image: './media/scary-teacher/screenshot2.jpg',
        text: 'Rigorous memory footprint profiling and draw call batching on client applications to eliminate thermal throttling and maintain a fluid 60 FPS across low-to-mid range Android devices worldwide.'
      }
    ],
    externalLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.zakg.scaryteacher.hellgame&hl=en',
      docs: 'https://play.google.com/store/apps/details?id=com.zakg.scaryteacher.reels.drama&hl=en'
    },
    tags: ['AWS Backend', 'C#', 'High Concurrency', 'Performance Optimization', 'Android / iOS'],
    metrics: [
      { label: 'User Base', value: '50M+ Downloads' },
      { label: 'Cloud Infrastructure', value: 'AWS Services' },
      { label: 'Client Platforms', value: 'Mobile / Android' },
      { label: 'Optimization Focus', value: 'Memory & Thermal' }
    ],
    deepDive: {
      overview:
        'Responsible for backend integration and high-performance client features in live production environments, balancing new service rollouts with strict device memory and bandwidth constraints.',
      keyArchitecture: [
        {
          title: 'AWS Cloud Backend Architecture',
          detail: 'Architected backend integration using AWS cloud services for the Scary Teacher short drama/reels app, managing video feed delivery, authentication, and user data persistence.'
        },
        {
          title: 'Memory & Frametime Optimization',
          detail: 'Optimized runtime memory footprints, texture streaming, and CPU draw call batching to guarantee fluid 60 FPS performance on low-to-mid range Android devices.'
        },
        {
          title: 'High-Traffic Live-Ops',
          detail: 'Deployed stability patches, automated telemetry pipelines, and service optimizations across multi-million user installations.'
        }
      ],
      technicalTakeaways: [
        'Hands-on experience with cloud infrastructure orchestration supporting high-scale consumer applications.',
        'Deep practical understanding of CPU/GPU profiling and memory limits under tight hardware constraints.'
      ]
    }
  },

  // 5. ARCHETYPE ECS
  {
    id: 'ecs',
    title: 'Archetype ECS Runtime',
    badgeLabel: 'Archetype ECS',
    subtitle: 'Cache-Conscious Data-Oriented Architecture',
    shortSummary:
      'A handcrafted C++20 archetype Entity Component System with packed contiguous parallel column arrays, O(1) swap-and-pop deletions, and variadic range queries.',
    category: 'systems',
    categoryLabel: 'Systems & Low-Latency',
    status: 'Core Complete',
    year: '2026',
    role: 'Author',
    coverImage: './media/ecs/hero_runtime.svg',
    bannerImage: './media/ecs/hero_runtime.svg',
    architectureDiagram: './media/ecs/architecture.svg',
    architectureCaption: 'Archetype ECS Architecture: Contiguous column storage per component signature, O(1) swap-and-pop, and zero pointer indirection.',
    pillars: [
      {
        title: 'Contiguity.',
        image: './media/ecs/pillar1_columns.svg',
        text: 'Rather than scattering entity structs across heap pages with pointers, entities sharing identical component signatures are stored in parallel contiguous arrays, fully saturating CPU L1/L2 cache prefetchers.'
      },
      {
        title: 'Constant Destruction.',
        image: './media/ecs/pillar2_swap_pop.svg',
        text: 'When an entity is destroyed, the tail element is swapped into the vacant slot and popped. Dense arrays stay 100% packed without requiring costly O(N) memory compaction or array shifts.'
      },
      {
        title: 'Zero Indirection.',
        image: './media/ecs/pillar3_queries.svg',
        text: 'Component IDs are generated as compile-time static counters. Query matching iterates archetypes through bitset comparisons, allowing the compiler to inline iteration loops and vectorize updates.'
      }
    ],
    externalLinks: {
      github: 'https://github.com/Umair-Manzoor-47/ECS'
    },
    tags: ['C++20', 'Data-Oriented Design', 'Type Erasure', 'Variadic Templates', 'Raylib'],
    metrics: [
      { label: 'Data Layout', value: 'Contiguous Columns' },
      { label: 'Entity Removal', value: 'O(1) Swap & Pop' },
      { label: 'Type Indexing', value: 'Compile-Time ID' },
      { label: 'System Queries', value: 'Zero Indirection' }
    ],
    deepDive: {
      overview:
        'Implements an archetype-based memory layout (inspired by Unity DOTS and Flecs). Component data is organized in parallel contiguous arrays to maximize CPU L1/L2 prefetching and eliminate pointer chasing.',
      keyArchitecture: [
        {
          title: 'Packed Contiguous Columns',
          detail: 'ComponentColumns store data linearly per archetype signature rather than scattering entity structs across heap pages.'
        },
        {
          title: 'O(1) Swap-and-Pop Deletions',
          detail: 'When an entity is destroyed, the tail element is swapped into the vacant slot and the sparse EntityRegistry table updated in constant time.'
        },
        {
          title: 'Variadic Range Queries',
          detail: 'Queries iterate archetypes matching component signatures (std::ranges::includes) directly over flat memory.'
        }
      ],
      technicalTakeaways: [
        'Includes an interactive Raylib simulation verifying hundreds of entities with real-time per-system microsecond timings.',
        'Zero external runtime dependencies for the core ECS engine.'
      ]
    }
  },

  // 6. LITTLE KING UNCHAINED (STEAM PC)
  {
    id: 'little-king-unchained',
    title: 'Commercial C# Systems & Architecture',
    badgeLabel: 'Little King Unchained',
    subtitle: 'Little King Unchained (Steam PC Release)',
    shortSummary:
      'Commercial PC title released on Steam. Served as Main Code Engineer responsible for core system architectures, state management, and memory profiling.',
    category: 'backend',
    categoryLabel: 'Backend & Production',
    status: 'Shipped on Steam',
    year: '2026',
    role: 'Main Code Engineer',
    coverImage: './media/little-king/header.jpg',
    bannerImage: './media/little-king/header.jpg',
    architectureDiagram: './media/little-king/architecture.svg',
    architectureCaption: 'Little King Systems Architecture: Fixed-timestep loop, hierarchical state machines, GC churn elimination, and Steamworks bridge.',
    pillars: [
      {
        title: 'Core State Machine.',
        image: './media/little-king/screenshot1.jpg',
        text: 'Main Code Engineer responsible for architecting the central execution loop, asynchronous input abstraction layer, and decoupled state machines for a commercial release on Steam.'
      },
      {
        title: 'Frametime Consistency.',
        image: './media/little-king/screenshot2.jpg',
        text: 'Engineered zero-allocation gameplay routines and optimized resource streaming pipelines to minimize garbage collector interruptions and prevent frametime spikes during intense platforming sequences.'
      },
      {
        title: 'Store Delivery.',
        image: './media/little-king/screenshot3.jpg',
        text: 'Managed the full software lifecycle from initial prototype to Steam launch, integrating Steamworks APIs, controller abstractions, and resolving platform-specific hardware edge cases.'
      }
    ],
    externalLinks: {
      steam: 'https://store.steampowered.com/app/4681910/Little_King_Unchained/'
    },
    tags: ['C#', 'Systems Architecture', 'Profiling', 'Steam PC', 'Commercial Release'],
    metrics: [
      { label: 'Platform', value: 'Steam (PC)' },
      { label: 'Role', value: 'Main Code Engineer' },
      { label: 'Delivery', value: 'Full Production Cycle' },
      { label: 'Core Focus', value: 'Systems & Stability' }
    ],
    deepDive: {
      overview:
        'Primary software engineer for a commercial PC release on Steam. Engineered the core execution loops, state synchronization, input abstraction layer, and resolved hardware-specific edge cases.',
      keyArchitecture: [
        {
          title: 'Core Systems & State Architecture',
          detail: 'Engineered decoupled state machines, game loop controllers, and responsive asynchronous input pipelines.'
        },
        {
          title: 'Memory & Garbage Collection Profiling',
          detail: 'Profiled and eliminated memory churn to minimize runtime GC hitches, ensuring consistent frame delivery across varied PC specifications.'
        },
        {
          title: 'Release Engineering',
          detail: 'Managed automated build pipelines, Steamworks API integration, and release validation.'
        }
      ],
      technicalTakeaways: [
        'Architected clean modular systems designed to handle continuous design changes during active production.',
        'Hands-on experience delivering a commercial software product from conception to store launch.'
      ]
    }
  },

  // 7. ENSEMBLE UI CONTRIBUTION
  {
    id: 'ensemble',
    title: 'EnsembleUI Framework',
    badgeLabel: 'Ensemble Runtime',
    subtitle: 'Declarative Cross-Platform Client Runtime',
    shortSummary:
      'Contributed for 6 months to the Ensemble open-source declarative mobile framework in Flutter/Dart, optimizing widget render pipelines and async data flows.',
    category: 'opensource',
    categoryLabel: 'Open Source & Frameworks',
    status: 'Contributor (6 Mos)',
    year: '2025',
    role: 'Jr Software Engineer (Remote)',
    coverImage: './media/ensemble/hero_runtime.svg',
    bannerImage: './media/ensemble/hero_runtime.svg',
    architectureDiagram: './media/ensemble/architecture.svg',
    architectureCaption: 'Ensemble Runtime Pipeline: Declarative YAML DSL, reactive AST evaluation, optimized Flutter render tree, and native channels.',
    pillars: [
      {
        title: 'Declarative Runtimes.',
        image: './media/ensemble/pillar1_declarative.svg',
        text: 'Contributed to the Ensemble open-source declarative mobile engine, parsing structured configurations into native Flutter widget hierarchies with dynamic state synchronization.'
      },
      {
        title: 'Rendering Optimization.',
        image: './media/ensemble/pillar2_drawcall.svg',
        text: 'Improved widget rendering performance by ~2% through fine-grained draw call batching and eliminating unnecessary dirty-element tree marks on asynchronous data streams.'
      },
      {
        title: 'Monorepo Architecture.',
        image: './media/ensemble/pillar3_monorepo.svg',
        text: 'Maintained modular package separation across authentication, networking, and UI modules within a Melos monorepo supporting iOS, Android, and web targets.'
      }
    ],
    externalLinks: {
      github: 'https://github.com/EnsembleUI/ensemble'
    },
    tags: ['Flutter / Dart', 'Declarative UI', 'Performance Optimization', 'Melos Monorepo'],
    metrics: [
      { label: 'Contribution', value: '6 Months' },
      { label: 'Render Optimization', value: '+2% Draw Speed' },
      { label: 'Platform Scope', value: 'iOS, Android & Web' },
      { label: 'Monorepo', value: 'Melos Workflow' }
    ],
    deepDive: {
      overview:
        'Contributed as a remote Jr Software Engineer to the Ensemble declarative runtime, which parses structured configurations into native Flutter and web client applications.',
      keyArchitecture: [
        {
          title: 'Widget Rendering Pipeline',
          detail: 'Improved widget rendering performance by ~2% by optimizing draw call overhead, render caching, and asynchronous backend-to-widget loading.'
        },
        {
          title: 'Reference App Architectures',
          detail: 'Built and shipped production-ready template architectures demonstrating framework best practices.'
        }
      ],
      technicalTakeaways: [
        'Experience collaborating on an active production open-source codebase with international teams.',
        'Deepened understanding of declarative UI runtimes, reactive state, and asynchronous data bindings.'
      ]
    }
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    company: 'ZnK / GenITeam',
    companyUrl: 'https://geniteam.com/',
    role: 'Software Engineer',
    location: 'Lahore, Pakistan',
    period: '01/2026 – Present',
    current: true,
    description:
      'Engineering high-performance client features, cloud backend integrations, and core system architectures across high-traffic mobile titles (50M+ users) and commercial PC releases.',
    highlights: [
      'Shipped production features across live mobile titles in a large-scale C# codebase.',
      'Main Code Engineer for Little King Unchained on Steam (systems architecture, profiling, and release).',
      'Built AWS cloud backend integration for the Scary Teacher short drama/reels application.',
      'Optimized memory usage and rendering pipelines for resource-constrained Android devices.'
    ],
    tags: ['C#', 'AWS Cloud', 'Performance Optimization', 'Steam Release', 'Live-Ops']
  },
  {
    company: 'EnsembleUI',
    companyUrl: 'https://ensembleui.com/',
    role: 'Jr Software Engineer (Remote)',
    location: 'New York, USA (Remote)',
    period: '01/2025 – 12/2025',
    description:
      'Contributed to the Ensemble declarative framework, implementing core client runtime capabilities and optimizing render pipelines.',
    highlights: [
      'Implemented UI features used by external Flutter app developers worldwide.',
      'Improved widget rendering performance by ~2% via draw call batching and render caching.',
      'Authored reference application architectures and asynchronous data-loading patterns.'
    ],
    tags: ['Flutter', 'Dart', 'Declarative UI', 'Async Runtimes', 'Melos']
  },
  {
    company: 'UET Game Studio',
    companyUrl: 'https://uet.edu.pk/',
    role: 'Software Engineer Intern',
    location: 'Lahore, Pakistan',
    period: '09/2024 – 12/2024',
    description:
      'Engineered interactive VR simulation systems and optimized rendering budgets under tight thermal and frametime limits.',
    highlights: [
      'Engineered VR interaction systems for a mobile medical education simulator.',
      'Optimized mobile rendering budgets, shipping 2 titles on Google Play and Amazon Store (10K+ downloads).'
    ],
    tags: ['VR Systems', 'Mobile Optimization', 'C#', 'State Synchronization']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'BS Computer Science',
    institution: 'University of Engineering & Technology (UET)',
    institutionUrl: 'https://uet.edu.pk/',
    location: 'Lahore, Pakistan',
    period: '10/2020 – 10/2024',
    details: [
      'Core coursework: Operating Systems, Computer Architecture, Data Structures & Algorithms, Computer Networks, Database Systems, Software Design.',
      'Strong foundations in systems programming, concurrency, and algorithm optimization.'
    ]
  },
  {
    degree: 'FSc Pre-Engineering',
    institution: 'Rashid Minhaas Boys H/S School',
    location: 'Alipur, Pakistan',
    period: '04/2018 – 09/2020',
    details: [
      'Advanced Mathematics, Physics, and analytical problem solving.'
    ]
  }
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['C#', 'C++', 'Dart', 'Java', 'C', 'Lua']
  },
  {
    category: 'Systems & Performance',
    skills: ['Low-Latency Architecture', 'Memory Pooling & Arenas', 'Data-Oriented Design (DOD)', 'Cache Locality', 'Real-Time Optimization']
  },
  {
    category: 'Backend & Cloud',
    skills: ['AWS Services', 'REST APIs', 'Spring Boot', 'Client-Server Networking']
  },
  {
    category: 'Runtimes & Toolchains',
    skills: ['Git', 'CMake', 'OpenGL', 'Unity', 'Flutter']
  }
];
