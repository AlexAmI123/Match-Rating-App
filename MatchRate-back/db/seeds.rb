# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
matches = Match.create([
    {
        name: "France VS Poland 2022 WC",
        image_url1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_France&psig=AOvVaw3FobOcYGXDPspGWkkEu-2h&ust=1676562448618000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCp6fvvl_0CFQAAAAAdAAAAABAD",
        image_url2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Poland&psig=AOvVaw0IfN6rgAS6e8IziWQ1WoRb&ust=1676562386784000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODbx97vl_0CFQAAAAAdAAAAABAD"
    },
    {
        name: "Argentina VS Croatia 2022 WC SF",
        image_url1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Argentina&psig=AOvVaw23_mEAFyuE9dswHb4SUk7E&ust=1676562586040000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKD43Lzwl_0CFQAAAAAdAAAAABAD",
        image_url2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fflag-of-Croatia&psig=AOvVaw09h5m212aSSwD_L3i5-YSd&ust=1676562645289000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjEtdrwl_0CFQAAAAAdAAAAABAD"
    },
    {
        name: "Argentina VS France 2022 WC FINAL",
        image_url1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Argentina&psig=AOvVaw23_mEAFyuE9dswHb4SUk7E&ust=1676562586040000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKD43Lzwl_0CFQAAAAAdAAAAABAD",
        image_url2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_France&psig=AOvVaw3FobOcYGXDPspGWkkEu-2h&ust=1676562448618000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCp6fvvl_0CFQAAAAAdAAAAABAD"
    }
])

reviews = Review.create([
    {
        title: "Great Match, dissapointing result",
        description: "Loved the match, it was breathtaking in many moments but the result was dissapointing, I hoped Poland would win",
        score: 4,
        match: matches.first
    },
    {
        title: "Great Match on both sides",
        description: "The match was amazing, watched it with friends and we all loved it",
        score: 5,
        match: matches.second
    },
    {
        title: "Great match up until penalties",
        description: "It was a great match but such a disappointing result. I wish it never got to the penalties.",
        score: 2,
        match: matches.third
    }
])