/* ==========================================================================
   COURSE DETAIL PAGE SCRIPT (used only by course.html)
   --------------------------------------------------------------------------
   Security note: we read the course id from the link (e.g. ?course=jee),
   but we NEVER write that raw value into the page. We only ever use it to
   look up a match inside COURSE_DATA (defined in course-data.js), which is
   a fixed list we control. If it's not an exact match, we show the
   "course not found" message instead. This stops anyone from putting
   harmful text or code into the link and having it appear on the page.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    var params = new URLSearchParams(window.location.search);
    var requestedId = params.get('course');

    // Only allow ids that actually exist in our course list (whitelist check)
    var course = (requestedId && Object.prototype.hasOwnProperty.call(COURSE_DATA, requestedId))
        ? COURSE_DATA[requestedId]
        : null;

    var foundView = document.getElementById('courseFound');
    var notFoundView = document.getElementById('courseNotFound');

    if (!course) {
        if (foundView) foundView.style.display = 'none';
        if (notFoundView) notFoundView.style.display = 'block';
        return;
    }

    if (notFoundView) notFoundView.style.display = 'none';
    if (foundView) foundView.style.display = '';

    // Every value below comes from our own course-data.js file, so it's
    // safe to insert — but we still use textContent (not innerHTML)
    // everywhere as good practice.
    document.title = course.title + ' — Konale Coaching Classes';
    setText('cd-breadcrumb-title', course.title);
    setText('cd-title', course.title);
    setText('cd-tag', course.tag);
    setText('cd-description', course.description);
    setText('cd-duration', course.duration);
    setText('cd-students', course.students);
    setText('cd-batch', course.batch);

    var iconEl = document.getElementById('cd-icon');
    if (iconEl && course.icon) {
        iconEl.src = course.icon;
        iconEl.alt = course.title + ' icon';
    }

    var list = document.getElementById('cd-highlights');
    if (list) {
        list.innerHTML = ''; // clear any placeholder content
        course.highlights.forEach(function (point) {
            var li = document.createElement('li');

            var dot = document.createElement('span');
            dot.className = 'dot';
            dot.textContent = '✓';

            var text = document.createElement('span');
            text.textContent = point;

            li.appendChild(dot);
            li.appendChild(text);
            list.appendChild(li);
        });
    }

    function setText(id, value) {
        var el = document.getElementById(id);
        if (el) el.textContent = value;
    }
});
