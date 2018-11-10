/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* The test suite for RSS feeds. */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('have non-empty URL', () => {
            allFeeds.map(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* This test loops through each feed in the allFeeds object 
         * and ensures it has a name defined and that the name is not empty.
         */
        it('have non-empty name', () => {
            allFeeds.map(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* The test suite for the menu. */
    describe('The menu', () => {
        /* This test ensures the menu element is hidden by default.
         * [Fix] The test will work when body has other classes.
         */
        it('is hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* This test ensures the menu changes visibility when the menu
          * icon is clicked.
          */
         it('changes visibility when the menu icon is clicked', () => {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

    });

    /* The test suite for initial entries. */
    describe('Initial Entries', () => {
        /* This test ensures when the loadFeed function is called
         * and completes its work, there is at least
         * a single .entry element within the .feed container.
         * [Fix] The test will work when the first child of .feed
         *       is of other type.
         */

        /* Load feeds before all tests. */
        beforeEach(done => {
            loadFeed(0, () =>{
                done();
            });
        });

        it('are not empty', () => {
            /* The .feed container should contain at least a .entry
             * element.
             */
            expect($('.feed .entry').length).not.toBe(0);
        });
    
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * [Fix] There will be no race.
         */
        let firstFeed;

        /* Load feeds before all tests. */
        beforeEach(done => {
            loadFeed(0, () => {
                firstFeed = $('.entry').html();
                loadFeed(1, () => {
                    done();
                });
            });
        });

        it('causes the content to change', () => {
            expect($('.entry').html()).not.toBe(firstFeed);
        });
    });
}());
