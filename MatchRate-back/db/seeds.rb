# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
matches = Match.create([
    {
        name: "France VS Poland 2022 WC",
        c1alpha2: "fr",
        c2alpha2: "pl"
    },
    {
        name: "Argentina VS Croatia 2022 WC SF",
        c1alpha2: "ar",
        c2alpha2: "hr"
    },
    {
        name: "Argentina VS France 2022 WC FINAL",
        c1alpha2: "ar",
        c2alpha2: "fr"
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