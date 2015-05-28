(function (global, document) {
    'use strict';

    var NUM_ENTRIES = 3,
        URL = "http://qiita.com/itkr/feed",
        OUTPUT_ID = "feed";

    function formatDate(date) {
        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();
        return year + "." + (month < 10 ? "0" + month : month) + "." + (day < 10 ? "0" + day : day);
    }

    function makeEntryHTML(entry) {
        var date = formatDate(new Date(entry.publishedDate));
        return '<li>(' + date + ') <a href="' + entry.link + '">' + entry.title + '</a></li>';
    }

    function init() {
        var feed = new global.google.feeds.Feed(URL),
            html = "",
            i = 0;
        feed.setNumEntries(NUM_ENTRIES);
        feed.load(function (result) {
            if (result.error) {
                // console.log(result.error.code + ":" + result.error.message);
                return;
            }
            for (i = 0; i < result.feed.entries.length; i++) {
                html += makeEntryHTML(result.feed.entries[i]);
            }
            document.getElementById(OUTPUT_ID).innerHTML = html;
        });
    }

    global.google.load("feeds", "1");
    global.google.setOnLoadCallback(init);
}(this, this.document));