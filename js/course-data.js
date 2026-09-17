/* ==========================================================================
   COURSE DATA
   --------------------------------------------------------------------------
   This is the ONE place you need to edit to change what shows up on a
   course's detail page (course.html). Each course is identified by a short
   "id" (jee, cet, neet, foundation) — that id is what's used in the link,
   e.g. course.html?course=jee

   To add a brand new course:
   1. Copy one of the blocks below (from the { to the matching },)
   2. Give it a new id, e.g. "olympiad"
   3. Fill in the fields
   4. On index.html, add a course card whose href is course.html?course=olympiad
   ========================================================================== */

var COURSE_DATA = {

    jee: {
        title: 'IIT-JEE',
        tag: 'JEE Main & JEE Advanced',
        icon: 'img/book.png',
        description: 'Comprehensive preparation for JEE Main and JEE Advanced — the gateway to IITs, NITs and top engineering colleges. Our IIT-JEE program covers Physics, Chemistry, and Mathematics with deep conceptual clarity and problem-solving speed, taught by faculty who have themselves studied at IITs.',
        duration: '2 Years (Class XI + XII)',
        students: '1200+ students enrolled',
        batch: 'Weekday & Weekend batches available',
        highlights: [
            'Physics, Chemistry & Mathematics — full JEE Main + Advanced syllabus',
            'Weekly problem-solving sessions and timed mock tests',
            'Doubt-clearing sessions with subject experts',
            'Regular performance tracking and parent updates'
        ]
    },

    cet: {
        title: 'MHT-CET',
        tag: 'MHT-CET & JEE Main',
        icon: 'img/book.png',
        description: 'Focused MHT-CET preparation combined with the JEE Main syllabus, built for Maharashtra students aiming for top engineering colleges. Covers Physics, Chemistry and Mathematics aligned to the Maharashtra state board and the CET exam pattern.',
        duration: '2 Years (Class XI + XII)',
        students: '1800+ students enrolled',
        batch: 'Weekday & Weekend batches available',
        highlights: [
            'State board + CET pattern aligned curriculum',
            'Extra weightage practice on CET-specific question types',
            'Board exam and CET preparation run side by side',
            'Monthly full-length mock CET papers'
        ]
    },

    neet: {
        title: 'NEET',
        tag: 'NEET-UG',
        icon: 'img/book.png',
        description: 'Intensive NEET-UG preparation for students aspiring to join top medical colleges. Covers Physics, Chemistry and Biology with a special focus on NCERT and application-based questions, the way NEET actually tests them.',
        duration: '2 Years (Class XI + XII)',
        students: '2000+ students enrolled',
        batch: 'Weekday & Weekend batches available',
        highlights: [
            'Physics, Chemistry & Biology — NCERT-first approach',
            'Application-based question practice, not just theory',
            'Biology diagram and NCERT line-by-line revision sessions',
            'All-India ranked mock tests every month'
        ]
    },

    foundation: {
        title: 'Foundation',
        tag: 'School Boards & Olympiads',
        icon: 'img/book.png',
        description: 'An early-start program for students in classes VIII-X to build a strong conceptual foundation in Science and Mathematics. Designed to prepare students for competitive exams well ahead of time, without adding pressure at a young age.',
        duration: '1-3 Years (Classes VIII, IX, X)',
        students: '800+ students enrolled',
        batch: 'Weekend batches available',
        highlights: [
            'Strong basics in Science & Mathematics for classes VIII-X',
            'Olympiad and school board preparation together',
            'Concept-first teaching, minimal rote learning',
            'A smooth step-up into our JEE / NEET track later'
        ]
    }

};
