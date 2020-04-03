export interface Author {
    name: string;
    link?: string;
}

export interface Title {
    name: string;
    link?: string;
}

export interface Book {
    tags: string[];
    author: Author;
    title: Title;
}

export const books: Book[] = [
    {
        "tags": [
            "non-fiction"
        ],
        "author": {
            "name": "Rainer Maria Rilke",
        },
        "title": {
            "name": "Letters to a Young Poet"
        }
    },
    {
        "tags": [
            "non-fiction"
        ],
        "author": {
            "name": "Christopher Hitchens",
        },
        "title": {
            "name": "Letters to a Young Contrarian"
        }
    },
    {
        "tags": [
            "novel"
        ],
        "author": {
            "name": "Naomi Alderman",
        },
        "title": {
            "name": "The Power"
        }
    },
    {
        "tags": [
            "non-fiction"
        ],
        "author": {
            "name": "Tom Wolfe",
        },
        "title": {
            "name": "The Electric Kool-Aid Acid Test"
        }
    },
    {
        "tags": [
            "non-fiction"
        ],
        "author": {
            "name": "Pamela Druckerman",
        },
        "title": {
            "name": "Bringing Up Bébe"
        }
    },
    {
        "tags": [
            "novel"
        ],
        "author": {
            "name": "Leo Tolstoy",
        },
        "title": {
            "name": "The Death of Ivan Ilych"
        }
    },
    {
        "tags": [
            "novel"
        ],
        "author": {
            "name": "Fyodor Dostoevsky",
        },
        "title": {
            "name": "Notes from Underground"
        }
    },
    {
        "tags": [
            "non-fiction"
        ],
        "author": {
            "name": "Tom Wolfe",
        },
        "title": {
            "name": "The Painted Word"
        }
    },
    {
        "tags": [
            "novel"
        ],
        "author": {
            "name": "José Saramago",
        },
        "title": {
            "name": "Blindness"
        }
    },
    {
        "tags": [
            "non-fiction"
        ],
        "author": {
            "name": "Peter Thiel",
        },
        "title": {
            "name": "Zero to One"
        }
    },
    {
        "tags": [
            "non-fiction"
        ],
        "author": {
            "name": "C.S. Lewis",
        },
        "title": {
            "name": "Mere Christianity"
        }
    },
    {
        "tags": [
            "non-fiction"
        ],
        "author": {
            "name": "David Goggins",
        },
        "title": {
            "name": "Can't Hurt Me: Master Your Mind and Defy the Odds"
        }
    },
    {
        "tags": [
            "novel"
        ],
        "author": {
            "name": "Ernest Hemingway",
        },
        "title": {
            "name": "For Whom the Bell Tolls"
        }
    },
    {
        "tags": [
            "non-fiction", "essays"
        ],
        "author": {
            "name": "David Foster Wallace"
        },
        "title": {
            "name": "A Supposedly Fun Thing I'll Never Do Again"
        }
    },
    {
        "tags": [
            "novel"
        ],
        "author": {
            "name": "Jim Harrison"
        },
        "title": {
            "name": "The Ancient Minstrel"
        }
    },
    {
        "tags": [
            "novel"
        ],
        "author": {
            "name": "Jim Harrison"
        },
        "title": {
            "name": "Brown Dog"
        }
    },
    {
        "tags": [
            "novel"
        ],
        "author": {
            "name": "Neal Stephenson"
        },
        "title": {
            "name": "The Diamond Age"
        }
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Sejal Badani"
	}, 
	"title": {
            "name": "The Storyteller's Secret"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Tana French"
	}, 
	"title": {
            "name": "Into The Woods"
	}
    },
    {
	"tags": [
            "novel", "philosophy"
	], 
	"author": {
            "name": "Milan Kundera"
	}, 
	"title": {
            "name": "The Unbearable Lightness of Being"
	}
    },
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "James Gleick"
	}, 
	"title": {
            "name": "Chaos: Making a New Science"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Madeline Miller"
	}, 
	"title": {
            "name": "Circe"
	}
    },
    {
	"tags": [
            "poetry"
	], 
	"author": {
            "name": "Jim Harrison"
	}, 
	"title": {
            "name": "In Search of Small Gods"
	}
    },
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Anthony Bourdain"
	},
	"title": {
            "name": "Medium Raw"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Jim Harrison"
	},
	"title": {
            "name": "True North"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Norman Mailer"
	},
	"title": {
            "name": "The Naked and the Dead"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Stanisław Lem"
	},
	"title": {
            "name": "Solaris"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "John Steinbeck"
	},
	"title": {
            "name": "East of Eden"
	}
    },
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Susan Sontag"
	}, 
	"title": {
            "name": "On Photography"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Ethan Canin"
	}, 
	"title": {
            "name": "A Doubter's Almanac"
	}
    },
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "James Baldwin"
	}, 
	"title": {
            "name": "The Fire Next Time"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "F. Scott Fitzgerald"
	}, 
	"title": {
            "name": "The Great Gatsby"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "David Foster Wallace"
	}, 
	"title": {
            "name": "Infinite Jest"
	}
    },
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "David Deutsch"
	}, 
	"title": {
            "name": "The Beginning of Infinity"
	}
    },
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Viktor E. Frankl"
	}, 
	"title": {
            "name": "Man's Search For Meaning"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Jim Harrison"
	}, 
	"title": {
            "name": "Dalva"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Fran Lebowitz"
	}, 
	"title": {
            "name": "Social Studies"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Zach Klein"
	}, 
	"title": {
            "name": "Cabin Porn: Inspiration for Your Quiet Place Somewhere"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "David Foster Wallace"
	}, 
	"title": {
            "name": "Consider the Lobster"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "David Foster Wallace"
	}, 
	"title": {
            "name": "Brief Interviews With Hideous Men"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Fran Lebowitz"
	}, 
	"title": {
            "name": "Metropolitan Life"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "https://www.amazon.com/Jack-London/e/B00JXLBJHA/ref=as_li_ss_tl?ie=UTF8&linkCode=ll2&tag=adamgeorgio06-20&linkId=f09bccdacf4988a50aa5b14559eace10", 
            "name": "Jack London"
	}, 
	"title": {
            "name": "The Call of the Wild"
	}
    }, 
    {
	"tags": [
            "non-fiction",
            "essay"
	], 
	"author": {
            "name": "Henry David Thoreau",
	}, 
	"title": {
            "name": "Civil Disobedience"
	}
    },
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Henry David Thoreau",
	}, 
	"title": {
            "name": "Walden"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "David Foster Wallace",
	}, 
	"title": {
            "name": "Girl With Curious Hair"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Tom Robbins",
	}, 
	"title": {
            "name": "Jitterbug Perfume"
	}
    },
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "George Orwell",
	}, 
	"title": {
            "name": "All Art Is Propaganda"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "George V. Higgins",
	}, 
	"title": {
            "name": "The Friends of Eddie Coyle"
	}
    },
    {
	"tags": [
            "nightmare"
	], 
	"author": {
            "name": "William Bouroughs",
	}, 
	"title": {
            "name": "Naked Lunch"
	}
    },
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Marco Pierre White",
	}, 
	"title": {
            "name": "The Devil in the Kitchen: Sex, Pain, Madness and the Making of a Great Chef"
	}
    },
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Anthony Bourdain",
	}, 
	"title": {
            "name": "Kitchen Confidential"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Ernest Hemingway",
	}, 
	"title": {
            "name": "A Farewell to Arms"
	}
    },
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Jonathan Haidt",
	}, 
	"title": {
            "name": "The Righteous Mind: Why Good People Are Divided by Politics and Religion"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Neil Gaiman",
	}, 
	"title": {
            "name": "American Gods"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Jim Harrison",
	}, 
	"title": {
            "name": "Legends of the Fall"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Orsen Scott Card",
	}, 
	"title": {
            "name": "Xenocide"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Ben Sasse",
	}, 
	"title": {
            "name": "The Vanishing American Adult"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Charles Bukowski",
	}, 
	"title": {
            "name": "Hollywood"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "J.D. Salinger",
	}, 
	"title": {
            "name": "Catcher in the Rye"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "Ernest Cline",
	}, 
	"title": {
            "name": "Ready Player One"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Joe Simpson",
            "link": "https://www.amazon.com/Joe-Simpson/e/B000AQ3DQW/ref=as_li_ss_tl?ie=UTF8&linkCode=ll2&tag=adamgeorgiou-20&linkId=06ac07eb838ea97d7473181ee27abcdc"
	}, 
	"title": {
            "link": "https://www.amazon.com/Touching-Void-Joe-Simpson-ebook/dp/B00AR0DN3Y/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1490581795&sr=1-1&keywords=touching+the+void&linkCode=ll1&tag=adamgeorgiou-20&linkId=d791e79ad62f6074636f2132d61091be",
            "name": "Touching the Void"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Bill Bryson",
            "link": "https://www.amazon.com/Bill-Bryson/e/B000APXTVM/ref=as_li_ss_tl?ie=UTF8&linkCode=ll2&tag=adamgeorgiou-20&linkId=341009439eb30a763817072708b678f3"
	}, 
	"title": {
            "link": "https://www.amazon.com/dp/B000S1LSAM/ref=as_li_ss_tl?_encoding=UTF8&btkr=1&linkCode=ll1&tag=adamgeorgio06-20&linkId=21ce70d69aad8234f3ee7702951e3c13",
            "name": "A Walk In The Woods: Rediscovering America on the Appalachian Trail"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Christopher Hitchens",
            "link": "https://www.amazon.com/Christopher-Hitchens/e/B000APSKR0/ref=as_li_ss_tl?ie=UTF8&linkCode=ll2&tag=adamgeorgio06-20&linkId=aefb6da4ea9bfb298d33e3a14fdc2f9a"
	}, 
	"title": {
            "link": "https://www.amazon.com/Hitch-22-Memoir-Christopher-Hitchens/dp/044654034X/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=adamgeorgio06-20&linkId=dcf01e9095a031f3a31a34df7686dbce",
            "name": "Hitch-22"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "name": "Bob Dylan",
            "link": "https://www.amazon.com/Bob-Dylan/e/B00LQF9VGW/ref=as_li_ss_tl?qid=1475006784&sr=8-1&linkCode=ll2&tag=adamgeorgio06-20&linkId=4ca022bca1aca2f589e4f8ef8af06f5b"
	}, 
	"title": {
            "link": "https://www.amazon.com/Chronicles-Bob-Dylan/dp/0743244583/ref=as_li_ss_tl?ie=UTF8&qid=1475006784&sr=8-1&keywords=bob+dylan+chronicles&linkCode=ll1&tag=adamgeorgio06-20&linkId=326453b11717ba1b80370eb067719adc",
            "name": "Chronicles"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "name": "J.K. Rowling & Jack Thorne"
	}, 
	"title": {
            "link": "https://www.amazon.com/Harry-Potter-Cursed-Child-Production/dp/1338099132/ref=as_li_ss_tl?ie=UTF8&qid=1470532900&sr=8-1&keywords=harry+potter+and+the+cursed+child&linkCode=ll1&tag=adamgeorgio06-20&linkId=98f6644a1916990db1c9d12a40aa5029", 
            "name": "Harry Potter and the Cursed Child"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "https://www.amazon.com/Charles-Bukowski/e/B000APEQ9G/ref=as_li_ss_tl?ie=UTF8&linkCode=ll2&tag=adamgeorgio06-20&linkId=4366e15aef119e42550476b820595f7f", 
            "name": "Charles Bukowski"
	}, 
	"title": {
            "link": "https://www.amazon.com/Love-Dog-Hell-Charles-Bukowski/dp/0876853629/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=adamgeorgio06-20&linkId=f38591fb431fdbb028b85fa3a1674597", 
            "name": "Love is a Dog From Hell"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "https://www.amazon.com/Paulo-Coelho/e/B000AQ3HB8/ref=as_li_ss_tl?ie=UTF8&linkCode=ll2&tag=adamgeorgio06-20&linkId=6fa261d0a7b8a0157ec1973097dcdc21", 
            "name": "Paulo Coelho"
	}, 
	"title": {
            "link": "https://www.amazon.com/dp/B00U6SFUSS/ref=as_li_ss_tl?_encoding=UTF8&btkr=1&linkCode=ll1&tag=adamgeorgio06-20&linkId=ce9400533f03bb6749eede107dbd5d67", 
            "name": "The Alchemist"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "https://www.amazon.com/Iain-M.-Banks/e/B000APXAVG/ref=as_li_ss_tl?ie=UTF8&linkCode=ll2&tag=adamgeorgio06-20&linkId=f4a8fec29753115acd335025529f7d3b", 
            "name": "Iain M. Banks"
	}, 
	"title": {
            "link": "https://www.amazon.com/Player-Games-Culture-Novel-Book-ebook/dp/B002WM3HC2/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=adamgeorgio06-20&linkId=813ac02c8574212f06c9c8c25a77a570", 
            "name": "The Player Of Games"
	}
    }, 
    {
	"tags": [
            "poetry"
	], 
	"author": {
            "link": "https://www.amazon.com/Gary-Snyder/e/B000APL9JG/ref=as_li_ss_tl?ie=UTF8&linkCode=ll2&tag=adamgeorgio06-20&linkId=99b4eae6e67051b00dd77be85f17175c", 
            "name": "Gary Snyder"
	}, 
	"title": {
            "link": "https://www.amazon.com/Riprap-Cold-Mountain-Poems-Snyder/dp/B003Z9JMTS/ref=as_li_ss_tl?s=digital-text&ie=UTF8&qid=1469126721&sr=8-1&keywords=riprap+and+cold&linkCode=ll1&tag=adamgeorgio06-20&linkId=4fc544fbf58d33c19997b11b138c4ed7", 
            "name": "Riprap; And, Cold Mountain Poems"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "https://www.amazon.com/Neil-Young/e/B009NZVNFY/ref=as_li_ss_tl?ie=UTF8&linkCode=ll2&tag=adamgeorgio06-20&linkId=dabee3e5f2ee642ad5c45e14ca19e4fe", 
            "name": "Neil Young"
	}, 
	"title": {
            "link": "https://www.amazon.com/Waging-Heavy-Peace-Deluxe-Young-ebook/dp/0399159460/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1469126800&sr=1-1&keywords=waging+heavy+peace&linkCode=ll1&tag=adamgeorgio06-20&linkId=12c49a55fbef5d9ce1300d9d692fbb47", 
            "name": "Waging Heavy Peace: A Hippie Dream"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Paul-Rees/e/B001JS6X9O/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=9b15f707434b19608c7d66a88d4a315d", 
            "name": "Paul Rees"
	}, 
	"title": {
            "link": "https://www.amazon.com/Robert-Plant-Life-Paul-Rees/dp/0062281399/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467915092&sr=1-1&keywords=Robert+Plant:+A+Life&linkCode=sl1&tag=adamgeorgio06-20&linkId=37e9dacf8c9f0cd032c6c4ef4457a896", 
            "name": "Robert Plant: A Life"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "https://www.amazon.com/Jack-London/e/B00JXLBJHA/ref=as_li_ss_tl?ie=UTF8&linkCode=ll2&tag=adamgeorgio06-20&linkId=f09bccdacf4988a50aa5b14559eace10", 
            "name": "Jack London"
	}, 
	"title": {
            "link": "https://www.amazon.com/White-Fang-Jack-London/dp/1505313104/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=adamgeorgio06-20&linkId=b0df677b1de5f9bc6790be024cfc4668", 
            "name": "White Fang"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Dave-Eggers/e/B001H6UAH4/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=81cdb092caa080782eb69e6f89231b89", 
            "name": "Dave Eggers"
	}, 
	"title": {
            "link": "https://www.amazon.com/Heartbreaking-Work-Staggering-Genius/dp/0375725784?tag=adamgeorgio06-20", 
            "name": "A Heartbreaking Work of Staggering Genius"
	}
    },
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Dave-Eggers/e/B001H6UAH4/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=81cdb092caa080782eb69e6f89231b89", 
            "name": "Dave Eggers"
	}, 
	"title": {
            "link": "https://www.amazon.com/dp/B00EGMQIJ0/ref=as_li_ss_tl?_encoding=UTF8&btkr=1&linkCode=ll1&tag=adamgeorgiou-20&linkId=b889c0ed5a1b15db63546db87037e393", 
            "name": "The Circle"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Kurt-Vonnegut/e/B000APYE16/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=f06be4b87f8c9cec994382cf07abef72", 
            "name": "Kurt Vonnegut"
	}, 
	"title": {
            "link": "https://www.amazon.com/Breakfast-Champions-Novel-Kurt-Vonnegut/dp/0385334206?tag=adamgeorgio06-20", 
            "name": "Breakfast of Champions"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/William-Finnegan/e/B000APL4SC/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=4dd90ebaef899be59d7f19c1a8c1af55", 
            "name": "William Finnegan"
	}, 
	"title": {
            "link": "https://www.amazon.com/Barbarian-Days-Surfing-William-Finnegan/dp/0143109391?tag=adamgeorgio06-20", 
            "name": "Barbarian Days: A Surfing Life"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Matthew-Randazzo-V/e/B002N7VL38/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=654b35a5e8904daa4a80f75dc1b4f4d4", 
            "name": "Matthew Randazzo V"
	}, 
	"title": {
            "link": "https://www.amazon.com/Mr-New-Orleans-Underworld-Legend/dp/0692237488?tag=adamgeorgio06-20", 
            "name": "Mr. New Orleans: The Life of a Big Easy Underworld Legend"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Ernest-Hemingway/e/B000APYVZU/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=6333b9d326a1a45c21d65c74db826be3", 
            "name": "Ernest Hemingway"
	}, 
	"title": {
            "link": "https://www.amazon.com/Old-Man-Sea-Ernest-Hemingway/dp/0684801221?tag=adamgeorgio06-20", 
            "name": "The Old Man and the Sea"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Charles-Bukowski/e/B000APEQ9G/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=1faa4f65aac5c9d26cfe10e118394349", 
            "name": "Charles Bukowski"
	}, 
	"title": {
            "link": "https://www.amazon.com/Hot-Water-Music-Charles-Bukowski/dp/0876855966?tag=adamgeorgio06-20", 
            "name": "Hot Water Music"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Cormac-McCarthy/e/B000APT0OW/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=1dcedf1b195756544eaa76c8ab598489", 
            "name": "Cormac Mccarthy"
	}, 
	"title": {
            "link": "https://www.amazon.com/Road-Cormac-McCarthy/dp/0307387895?tag=adamgeorgio06-20", 
            "name": "The Road"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Terry-Pratchett/e/B000AQ0NN8/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=8efafd4180033760f2dbc2d507d0384c", 
            "name": "Terry Pratchett"
	}, 
	"title": {
            "link": "https://www.amazon.com/Color-Magic-Discworld-Terry-Pratchett/dp/0062225677?tag=adamgeorgiou06-20", 
            "name": "The Color of Magic"
	}
    }, 
    {
	"tags": [
            "non-fiction", 
            "comedy"
	], 
	"author": {
            "link": "http://www.amazon.com/Aziz-Ansari/e/B01CUMX5UW/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=59a7852e5b3a90f29189c7ea47f0aebc", 
            "name": "Aziz Ansari"
	}, 
	"title": {
            "link": "https://www.amazon.com/Modern-Romance-Aziz-Ansari/dp/0143109251?tag=adamgeorgiou06-20", 
            "name": "Modern Romance"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Thomas-Piketty/e/B004MZ9VCW/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=50ad170049e2f98d2de24b48c246ab01", 
            "name": "Thomas Picketty"
	}, 
	"title": {
            "link": "https://www.amazon.com/Capital-Twenty-Century-Thomas-Piketty/dp/067443000X?tag=adamgeorgiou06-20", 
            "name": "Capital in the Twenty-First Century"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Lev-Grossman/e/B001HD42SA/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=fc0359f0e96e63c0d31ea8f6441f0fd1", 
            "name": "Lev Grossman"
	}, 
	"title": {
            "link": "https://www.amazon.com/Magician-King-Novel-Magicians-Trilogy/dp/0452298016?tag=adamgeorgiou06-20", 
            "name": "The Magician King"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Lev-Grossman/e/B001HD42SA/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=fc0359f0e96e63c0d31ea8f6441f0fd1", 
            "name": "Lev Grossman"
	}, 
	"title": {
            "link": "https://www.amazon.com/Magicians-Novel-Lev-Grossman-ebook/dp/B002AU7MJU?tag=adamgeorgiou06-20", 
            "name": "The Magicians"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Isaac-Asimov/e/B003RY2ISS/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=18aa8ecf33569b7502a55ad8cc096a4b", 
            "name": "Isaac Asimov"
	}, 
	"title": {
            "link": "https://www.amazon.com/Foundation-Isaac-Asimov-ebook/dp/B000FC1PWA?tag=adamgeorgiou06-20", 
            "name": "Foundation"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/David-Hume/e/B000AQ3Q8W/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=fa29a00819dfd01f9abf9fc695e4db72", 
            "name": "David Hume"
	}, 
	"title": {
            "link": "https://www.amazon.com/Selected-Essays-Oxford-Worlds-Classics/dp/0199540306?tag=adamgeorgiou06-20", 
            "name": "Selected Essays (of David Hume)"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/David-Graeber/e/B001IQXM5K/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=c6b5f1b45525a40dfd66e8c1a5cc9bb6", 
            "name": "David Graeber"
	}, 
	"title": {
            "link": "https://www.amazon.com/Debt-Updated-Expanded-First-Years/dp/1612194192?tag=adamgeorgiou06-20", 
            "name": "Debt: The First 5,000 Years"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Oliver-Sacks/e/B000APZZY6/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=8af56dbdbb534388f0c9e5e6feb56c97", 
            "name": "Oliver Sacks"
	}, 
	"title": {
            "link": "https://www.amazon.com/Man-Who-Mistook-His-Wife/dp/0684853949?tag=adamgeorgiou06-20", 
            "name": "The Man Who Mistook His Wife for a Hat"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/George-Orwell/e/B000AQ0KKY/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=df4a98d10e289f7a9a14fc91f9b72395", 
            "name": "George Orwell"
	}, 
	"title": {
            "link": "https://www.amazon.com/Animal-Farm-Anniversary-George-Orwell/dp/0451526341?tag=adamgeorgiou06-20", 
            "name": "Animal Farm"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Gillian-Flynn/e/B001JP3W46/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=8a159890d951278ec2f868e600c72c15", 
            "name": "Gillian Flynn"
	}, 
	"title": {
            "link": "https://www.amazon.com/Gone-Girl-Gillian-Flynn/dp/0307588378?tag=adamgeorgiou06-20", 
            "name": "Gone Girl"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Jack-Kerouac/e/B000APV9LY/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=19c6b6dd442c3b98364c1d62ab520275", 
            "name": "Jack Kerouac"
	}, 
	"title": {
            "link": "https://www.amazon.com/Dharma-Bums-Jack-Kerouac/dp/0140042520?tag=adamgeorgiou06-20", 
            "name": "The Dharma Bums"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Charles-R.-Morris/e/B001JP0GI6/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=29ca75a35ace46b2d63d497b3a1a749f", 
            "name": "Charles R. Morris"
	}, 
	"title": {
            "link": "https://www.amazon.com/Tycoons-Carnegie-Rockefeller-Invented-Supereconomy/dp/0805081348?tag=adamgeorgiou06-20", 
            "name": "The Tycoons: How Andrew Carnegie, John D. Rockefeller, Jay Gould, and J. P. Morgan Invented the American Supereconomy"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Jon-Krakauer/e/B000AQ8WPY/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=3bf9ffeaca67395ce488b60eed3de005", 
            "name": "Jon Krakauer"
	}, 
	"title": {
            "link": "https://www.amazon.com/Into-Wild-Jon-Krakauer/dp/0385486804?tag=adamgeorgiou06-20", 
            "name": "Into the Wild"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Jimmy-McDonough/e/B001IU51IM/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=45103e4938fe57de25f94bd8a587088d", 
            "name": "Jimmy McDonough"
	}, 
	"title": {
            "link": "https://www.amazon.com/Shakey-Youngs-Biography-Jimmy-McDonough/dp/0679750967?tag=adamgeorgiou06-20", 
            "name": "Shakey - Neil Young's Biography"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Hunter-S.-Thompson/e/B000AQ4U5U/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=4abc1adb1c3ac824fa495bd0d3c462c1", 
            "name": "Hunter S. Thompson"
	}, 
	"title": {
            "link": "https://www.amazon.com/Fear-Loathing-Las-Vegas-American/dp/0679785892?tag=adamgeorgiou06-20", 
            "name": "Fear and Loathing in Las Vegas"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Ernest-Hemingway/e/B000APYVZU/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=4a349e29e7c5ef0879a30f01fc39d3bc", 
            "name": "Ernest Hemingway"
	}, 
	"title": {
            "link": "https://www.amazon.com/Moveable-Feast-Restored-Ernest-Hemingway/dp/143918271X/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467918545&sr=1-1&keywords=A+Moveable+Feast&linkCode=sl1&tag=adamgeorgio06-20&linkId=670edf8e1a0cfffdc0b82de57264fcfa", 
            "name": "A Moveable Feast"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Patti-Smith/e/B005Q4A76W/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=6ac48984ce2d23c0569e4a90cdb49d16", 
            "name": "Patti Smith"
	}, 
	"title": {
            "link": "https://www.amazon.com/Just-Kids-Patti-Smith/dp/0060936223?tag=adamgeorgiou06-20", 
            "name": "Just Kids"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Joseph-Heller/e/B000APVA6I/ref=as_li_ss_tl?qid=1467918597&sr=1-1&linkCode=sl2&tag=adamgeorgio06-20&linkId=05de3b38ef84e7e664c139f18937cb46", 
            "name": "Joseph Heller"
	}, 
	"title": {
            "link": "https://www.amazon.com/Catch-22-50th-Anniversary-Joseph-Heller/dp/1451626657?tag=adamgeorgiou06-20", 
            "name": "Catch-22"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "https://www.amazon.com/Neil-Young-Nation-Quest-Obsession/dp/1553651162?tag=adamgeorgiou06-20", 
            "name": "Kevin Chong"
	}, 
	"title": {
            "link": "https://www.amazon.com/Neil-Young-Nation-Quest-Obsession/dp/1553651162/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467918613&sr=1-1&keywords=Neil+Young+Nation&linkCode=sl1&tag=adamgeorgio06-20&linkId=4074ad4c0252e8668a990cbbb74804a8", 
            "name": "Neil Young Nation"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Malala-Yousafzai/e/B00EZMLL5W/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=2594a45fdbd9250d424b995b1b4095fd", 
            "name": "Malala Yousafzai"
	}, 
	"title": {
            "link": "https://www.amazon.com/Am-Malala-Education-Changed-Readers/dp/0316327913?tag=adamgeorgiou06-20", 
            "name": "I Am Malala: The Girl Who Stood Up for Education and Was Shot by the Taliban"
	}
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Enders-Ender-Quintet-Orson-Scott/dp/0812550706/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467918707&sr=1-1&keywords=Ender's+Game&linkCode=sl1&tag=adamgeorgio06-20&linkId=0feb5456e089b4398fb94450c55eea01", 
            "name": "Ender's Game"
	}, 
	"author": {
            "link": "http://www.amazon.com/Orson-Scott-Card/e/B000AQ3SS0/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=a7afd082e9ef4b3f77f34743b85a15af", 
            "name": "Orson Scott Card"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467918739&sr=1-1&keywords=1984&linkCode=sl1&tag=adamgeorgio06-20&linkId=b34eeeba057275bcae79be3f4e516f06", 
            "name": "1984"
	}, 
	"author": {
            "link": "http://www.amazon.com/George-Orwell/e/B000AQ0KKY/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=b2a9e74fca7944811fcc26b1eaeac517", 
            "name": "George Orwell"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467918762&sr=1-1&keywords=brave+new+world&linkCode=sl1&tag=adamgeorgio06-20&linkId=02d90b859b17ad2427fe52491406153d", 
            "name": "Brave New World"
	}, 
	"author": {
            "link": "http://www.amazon.com/Aldous-Huxley/e/B000APWRRY/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=4b1d3359238bc5165547a98722d7124d", 
            "name": "Aldous Huxley"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Masters-Doom-Created-Transformed-Culture/dp/0812972155/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467918784&sr=1-1&keywords=masters+of+doom&linkCode=sl1&tag=adamgeorgio06-20&linkId=3e8fe99335bde41b812415c7c2077ff8", 
            "name": "Masters of Doom"
	}, 
	"author": {
            "link": "http://www.amazon.com/David-Kushner/e/B001IXU58U/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=a17b50cff8e32451721b83d2bcbc7049", 
            "name": "David Kushner"
	}, 
	"tags": [
            "non-fiction"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Speaker-Ender-Quintet-Orson-Scott/dp/0812550757/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467918805&sr=1-1&keywords=Speaker+for+the+Dead&linkCode=sl1&tag=adamgeorgio06-20&linkId=d270e73c6e4e6b60a734e7dbe7bd3772", 
            "name": "Speaker for the Dead"
	}, 
	"author": {
            "link": "http://www.amazon.com/Orson-Scott-Card/e/B000AQ3SS0/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=860aa8735d3c29476a6772df55a87ec9", 
            "name": "Orson Scott Card"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Designing-Brand-Identity-Essential-Branding/dp/1118099206/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467918829&sr=1-1&keywords=Designing+Brand+Identity&linkCode=sl1&tag=adamgeorgio06-20&linkId=c70663c0c87aa6f4ee45d0702c79f936", 
            "name": "Designing Brand Identity"
	}, 
	"author": {
            "link": "http://www.amazon.com/Alina-Wheeler/e/B001H6NV02/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=e3e4504afe3a913e0f66c1d967370028", 
            "name": "Alina Wheeler"
	}, 
	"tags": [
            "non-fiction", 
            "technical", 
            "design"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Eat-Pray-Love-Everything-Indonesia/dp/0143038419/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467918877&sr=1-1&keywords=eat+pray+love&linkCode=sl1&tag=adamgeorgio06-20&linkId=a0ebfcc56039f711af203c57a8041f1a", 
            "name": "Eat, Pray, Love"
	}, 
	"author": {
            "link": "http://www.amazon.com/Elizabeth-Gilbert/e/B000APV4U0/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=0d6ffe111ed10269cc896691bc26f7f5", 
            "name": "Elizabeth Gilbert"
	}, 
	"tags": [
            "non-fiction"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467918905&sr=1-1&keywords=The+Intelligent+Investor&linkCode=sl1&tag=adamgeorgio06-20&linkId=ca4ffd9b8f6b33e4247964680203db22", 
            "name": "The Intelligent Investor"
	}, 
	"author": {
            "link": "http://www.amazon.com/Benjamin-Graham/e/B000APZXBQ/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=ceeb509445351cd07fff1c5d1f3ba784", 
            "name": "Benjamin Graham"
	}, 
	"tags": [
            "non-fiction", 
            "technical", 
            "finance"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Effective-Specific-Improve-Programs-Designs/dp/0321334876/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919064&sr=1-2&keywords=effective+c++&linkCode=sl1&tag=adamgeorgio06-20&linkId=d40b32cfb9a379d010642e8fc2478330", 
            "name": "Effective C++"
	}, 
	"author": {
            "link": "http://www.amazon.com/Scott-Meyers/e/B004BBEYYW/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=8615f66477dd4854375cdc8c3293cf27", 
            "name": "Scott Meyers"
	}, 
	"tags": [
            "non-fiction", 
            "technical", 
            "programming"
	]
    }, 
    {
	"title": {
            "link": "http://amzn.to/29r6mTS?tag=adamgeorgiou06-20", 
            "name": "The Pragmatic Programmer"
	}, 
	"author": {
            "name": "Andy Hunt and Dave Thomas"
	}, 
	"tags": [
            "non-fiction", 
            "technical", 
            "programming"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1848000693/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919136&sr=1-1&keywords=The+Algorithm+Design+Manual&linkCode=sl1&tag=adamgeorgio06-20&linkId=eb6bb4a60f89c3bbc50eefab0e92cb4a", 
            "name": "The Algorithm Design Manual"
	}, 
	"author": {
            "link": "https://www.amazon.com/s?ie=UTF8&page=1&rh=n%3A283155%2Cp_27%3ASteven%20S%20Skiena&tag=adamgeorgio06-20", 
            "name": "Steven Skiena"
	}, 
	"tags": [
            "non-fiction", 
            "technical", 
            "programming"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Cats-Cradle-Novel-Kurt-Vonnegut/dp/038533348X/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919157&sr=1-1&keywords=Cat's+Cradle&linkCode=sl1&tag=adamgeorgio06-20&linkId=b9995b166de65d69a158329f1e64452b", 
            "name": "Cat's Cradle"
	}, 
	"author": {
            "link": "http://www.amazon.com/Kurt-Vonnegut/e/B000APYE16/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=eff3d93c8d9a9093ad354aca30423df0", 
            "name": "Kurt Vonnegut"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Slaughterhouse-Five-Kurt-Vonnegut-ebook/dp/B003XVYLDU/ref=as_li_ss_tl?ie=UTF8&ref_=asap_bc&linkCode=sl1&tag=adamgeorgio06-20&linkId=1a3d84a378c26ecb0f755c86eb3ae09a", 
            "name": "Slaughterhouse-Five"
	}, 
	"author": {
            "link": "http://www.amazon.com/Kurt-Vonnegut/e/B000APYE16/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=eff3d93c8d9a9093ad354aca30423df0", 
            "name": "Kurt Vonnegut"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Giver-Quartet-Book-ebook/dp/B003MC5N28/ref=as_li_ss_tl?s=digital-text&ie=UTF8&qid=1467919202&sr=1-1&keywords=the+giver&linkCode=sl1&tag=adamgeorgio06-20&linkId=64fc562060990e3db9bef496ee811b50", 
            "name": "The Giver"
	}, 
	"author": {
            "link": "http://www.amazon.com/Lois-Lowry/e/B000AP6Y8C/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=6177479afc6deea76472bd3fa0b0c045", 
            "name": "Lois Lowry"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Snow-Crash-Neal-Stephenson/dp/0553380958/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919227&sr=1-1&keywords=Snow+Crash&linkCode=sl1&tag=adamgeorgio06-20&linkId=f285b8629e21c018554cb480661b693d", 
            "name": "Snow Crash"
	}, 
	"author": {
            "link": "http://www.amazon.com/Neal-Stephenson/e/B000APS8L8/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=8a6427ec9219ec50fa9507a2231b83f0", 
            "name": "Neal Stephenson"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Flowers-Algernon-Daniel-Keyes/dp/0156030306/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919246&sr=1-1&keywords=Flowers+for+Algernon&linkCode=sl1&tag=adamgeorgio06-20&linkId=02bff0000066b2fff8c2b5696578d5ae", 
            "name": "Flowers for Algernon"
	}, 
	"author": {
            "link": "http://www.amazon.com/Daniel-Keyes/e/B000AP7H2O/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=7af9d6fe74cab9b59b380cad4d26def2", 
            "name": "Daniel Keyes"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Trout-Fishing-America-Richard-Brautigan/dp/0547255276/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919265&sr=1-1&keywords=Trout+Fishing+in+America&linkCode=sl1&tag=adamgeorgio06-20&linkId=1f5142378bf40ca836dc840d099268f2", 
            "name": "Trout Fishing in America"
	}, 
	"author": {
            "link": "http://www.amazon.com/Richard-Brautigan/e/B000AQ48CA/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=d9da7fea0d048bcc269568ff6211e2ba", 
            "name": "Richard Brautigan"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Revenge-Lawn-1962-1970-Richard-Brautigan/dp/0671209612/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919297&sr=1-2&keywords=revenge+of+the+lawn&linkCode=sl1&tag=adamgeorgio06-20&linkId=2dd0acd41808f54c157ccfcf2ae7bf71", 
            "name": "Revenge of the Lawn"
	}, 
	"author": {
            "link": "http://www.amazon.com/Richard-Brautigan/e/B000AQ48CA/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=d9da7fea0d048bcc269568ff6211e2ba", 
            "name": "Richard Brautigan"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Fishing-America-Springfield-Disaster-Watermelon/dp/B003L24FJ6/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919313&sr=8-1-fkmr0&keywords=The+Pill+vs.+the+Springfield+Mine+Disaster&linkCode=sl1&tag=adamgeorgio06-20&linkId=b610182519219e8120813e051f207fdf", 
            "name": "The Pill vs. the Springfield Mine Disaster"
	}, 
	"author": {
            "link": "http://www.amazon.com/Richard-Brautigan/e/B000AQ48CA/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=d9da7fea0d048bcc269568ff6211e2ba", 
            "name": "Richard Brautigan"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Fishing-America-Springfield-Disaster-Watermelon/dp/B003L24FJ6/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919313&sr=8-1-fkmr0&keywords=The+Pill+vs.+the+Springfield+Mine+Disaster&linkCode=sl1&tag=adamgeorgio06-20&linkId=b610182519219e8120813e051f207fdf", 
            "name": "In Watermelon Sugar"
	}, 
	"author": {
            "link": "http://www.amazon.com/Richard-Brautigan/e/B000AQ48CA/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=d9da7fea0d048bcc269568ff6211e2ba", 
            "name": "Richard Brautigan"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Abortion-Historial-Romance-1966/dp/0671809881/ref=as_li_ss_tl?ie=UTF8&qid=1467919348&sr=8-2&keywords=the+abortion+richard&linkCode=sl1&tag=adamgeorgio06-20&linkId=f3e6f35d566f3580fc99fa023dc77c4e", 
            "name": "The Abortion"
	}, 
	"author": {
            "link": "http://www.amazon.com/Richard-Brautigan/e/B000AQ48CA/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=d9da7fea0d048bcc269568ff6211e2ba", 
            "name": "Richard Brautigan"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"title": {
            "link": "https://www.amazon.com/Road-Jack-Kerouac/dp/0140283293/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919378&sr=1-1&keywords=on+the+road+jack+kerouac&linkCode=sl1&tag=adamgeorgio06-20&linkId=e672fc547454bd92a6b1b6d21ddb8068", 
            "name": "On the Road"
	}, 
	"author": {
            "link": "http://www.amazon.com/Jack-Kerouac/e/B000APV9LY/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=b5f4c84c444cd1dbda64f9d01aa83d0e", 
            "name": "Jack Kerouac"
	}, 
	"tags": [
            "novel"
	]
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/J.K.-Rowling/e/B000AP9A6K/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=14ea7b7d7bd306d87d4f2fee910a7e41", 
            "name": "J.K. Rowling"
	}, 
	"title": {
            "link": "https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919480&sr=1-1&keywords=harry+potter+and+the+sorcerer's+stone&linkCode=sl1&tag=adamgeorgio06-20&linkId=659ae5def2a72ba09b6d11d9e75af72b", 
            "name": "Harry Potter and the Sorcer's Stone"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/J.K.-Rowling/e/B000AP9A6K/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=14ea7b7d7bd306d87d4f2fee910a7e41", 
            "name": "J.K. Rowling"
	}, 
	"title": {
            "link": "https://www.amazon.com/Harry-Potter-Chamber-Secrets-Rowling/dp/0439064872/ref=as_li_ss_tl?ie=UTF8&psc=1&refRID=3WK23FV6T7MPRGVBXQXW&linkCode=sl1&tag=adamgeorgio06-20&linkId=6cccbfce970a898dbea97e51f850f2e3", 
            "name": "Harry Potter and the Chamber of Secrets"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/J.K.-Rowling/e/B000AP9A6K/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=14ea7b7d7bd306d87d4f2fee910a7e41", 
            "name": "J.K. Rowling"
	}, 
	"title": {
            "link": "https://www.amazon.com/Harry-Potter-Prisoner-Azkaban-Rowling/dp/0439136369/ref=as_li_ss_tl?ie=UTF8&psc=1&refRID=3WK23FV6T7MPRGVBXQXW&linkCode=sl1&tag=adamgeorgio06-20&linkId=ef7903799bff7f8ed39903cd2762ef28", 
            "name": "Harry Potter and the Prisoner of Azkaban"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/J.K.-Rowling/e/B000AP9A6K/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=14ea7b7d7bd306d87d4f2fee910a7e41", 
            "name": "J.K. Rowling"
	}, 
	"title": {
            "link": "https://www.amazon.com/Harry-Potter-Goblet-Fire-Rowling/dp/0439139600/ref=as_li_ss_tl?ie=UTF8&psc=1&refRID=ZWZRP8D3R5VRNTC25G4M&linkCode=sl1&tag=adamgeorgio06-20&linkId=d8157264ddb79a78b2f2a995530b35e3", 
            "name": "Harry Potter and the Goblet of Fire"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/J.K.-Rowling/e/B000AP9A6K/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=14ea7b7d7bd306d87d4f2fee910a7e41", 
            "name": "J.K. Rowling"
	}, 
	"title": {
            "link": "https://www.amazon.com/Harry-Potter-Order-Phoenix-Rowling/dp/0439358078/ref=as_li_ss_tl?ie=UTF8&psc=1&refRID=3VS3QNBE2RGNJZT8Q6RW&linkCode=sl1&tag=adamgeorgio06-20&linkId=1400b935a7c33c0b34bea83e221fbc08", 
            "name": "Harry Potter and the Order of the Phoenix"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/J.K.-Rowling/e/B000AP9A6K/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=14ea7b7d7bd306d87d4f2fee910a7e41", 
            "name": "J.K. Rowling"
	}, 
	"title": {
            "link": "https://www.amazon.com/Harry-Potter-Half-Blood-Prince-Book/dp/0439785960/ref=as_li_ss_tl?ie=UTF8&psc=1&refRID=7R3M4R5E3D6499Z53TG8&linkCode=sl1&tag=adamgeorgio06-20&linkId=6b95828c9c16f99a4c14966c1099de95", 
            "name": "Harry Potter and the Half-Blood Prince"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/J.K.-Rowling/e/B000AP9A6K/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=14ea7b7d7bd306d87d4f2fee910a7e41", 
            "name": "J.K. Rowling"
	}, 
	"title": {
            "link": "https://www.amazon.com/Harry-Potter-Deathly-Hallows-Book/dp/0545139708/ref=as_li_ss_tl?ie=UTF8&psc=1&refRID=B9JW4DDXBDY79TERC77C&linkCode=sl1&tag=adamgeorgio06-20&linkId=0a9a53e17ba13bc3c30f0e54626ffd9d", 
            "name": "Harry Potter and the Deathly Hallows"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/George-R.-R.-Martin/e/B000APIGH4/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=66efb43fc6820b571fcec9446ad55c30", 
            "name": "George R. R. Martin"
	}, 
	"title": {
            "link": "https://www.amazon.com/Game-Thrones-Song-Fire-Book/dp/0553593714/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919571&sr=1-1&keywords=A+Song+of+Ice+and+Fire:+A+Game+of+Thrones&linkCode=sl1&tag=adamgeorgio06-20&linkId=9008850dd2d21b0cdb48166098abbbdc", 
            "name": "A Song of Ice and Fire: A Game of Thrones"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/George-R.-R.-Martin/e/B000APIGH4/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=66efb43fc6820b571fcec9446ad55c30", 
            "name": "George R. R. Martin"
	}, 
	"title": {
            "link": "https://www.amazon.com/Clash-Kings-Song-Fire-Book-ebook/dp/B000FC1HBY/ref=as_li_ss_tl?ie=UTF8&ref_=asap_bc&linkCode=sl1&tag=adamgeorgio06-20&linkId=5d1830886531f2bcf2ac6d3a8ecb07d3", 
            "name": "A Song of Ice and Fire: A Clash of Kings"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/George-R.-R.-Martin/e/B000APIGH4/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=66efb43fc6820b571fcec9446ad55c30", 
            "name": "George R. R. Martin"
	}, 
	"title": {
            "link": "https://www.amazon.com/gp/product/B000FBFN1U/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=adamgeorgio06-20&linkId=7a131a1fbd09463fd48b3dd2ba4871ad", 
            "name": "A Song of Ice and Fire: A Storm of Swords"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/George-R.-R.-Martin/e/B000APIGH4/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=66efb43fc6820b571fcec9446ad55c30", 
            "name": "George R. R. Martin"
	}, 
	"title": {
            "link": "https://www.amazon.com/gp/product/B000FCKGPC/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=adamgeorgio06-20&linkId=c9758f2239cdd19a19cb021413c4bdb0", 
            "name": "A Song of Ice and Fire: A Feast for Crows"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/George-R.-R.-Martin/e/B000APIGH4/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=66efb43fc6820b571fcec9446ad55c30", 
            "name": "George R. R. Martin"
	}, 
	"title": {
            "link": "https://www.amazon.com/Dance-Dragons-Song-Fire-Book-ebook/dp/B003YL4LYI/ref=as_li_ss_tl?ie=UTF8&dpID=51KFegQTQXL&dpSrc=sims&preST=_OU01_AC_UL160_SR98,160_&psc=1&refRID=2K8S9XVWCN2CPABM4JZ2&linkCode=sl1&tag=adamgeorgio06-20&linkId=9b13daa7bc20e15abf50785ab202edc0", 
            "name": "A Song of Ice and Fire: A Dance with Dragons"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Stieg-Larsson/e/B001J95ACO/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=e055a7b59223a1fb619268767156cf08", 
            "name": "Stieg Larsson"
	}, 
	"title": {
            "link": "https://www.amazon.com/Girl-Dragon-Tattoo-Millennium-Book-ebook/dp/B0015DROBO/ref=as_li_ss_tl?s=digital-text&ie=UTF8&qid=1467919673&sr=1-1-fkmr0&keywords=he+Girl+with+the+Dragon+Tatto&linkCode=sl1&tag=adamgeorgio06-20&linkId=9175c7e8e62a2d8d0d2bc985fdb35c18", 
            "name": "The Girl with the Dragon Tattoo"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Stieg-Larsson/e/B001J95ACO/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=e055a7b59223a1fb619268767156cf08", 
            "name": "Stieg Larsson"
	}, 
	"title": {
            "link": "https://www.amazon.com/Girl-Played-Fire-Millennium-Book-ebook/dp/B001NLKT60/ref=as_li_ss_tl?ie=UTF8&ref_=asap_bc&linkCode=sl1&tag=adamgeorgio06-20&linkId=22f8febb53af522585ac522fc1610c92", 
            "name": "The Girl who Played with Fire"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Stieg-Larsson/e/B001J95ACO/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=e055a7b59223a1fb619268767156cf08", 
            "name": "Stieg Larsson"
	}, 
	"title": {
            "link": "https://www.amazon.com/gp/product/B0031YJFCQ/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=adamgeorgio06-20&linkId=76e81803431723c4a0eeec99fda5500d", 
            "name": "The Girl who Kicked the Hornets' Nest"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Louis-Sachar/e/B000AQ44EM/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=86915018b4f6f2ef478905b649d2541e", 
            "name": "Louis Sachar"
	}, 
	"title": {
            "link": "https://www.amazon.com/Holes-Louis-Sachar-ebook/dp/B004ZZH4V4/ref=as_li_ss_tl?s=digital-text&ie=UTF8&qid=1467919730&sr=1-1&keywords=holes&linkCode=sl1&tag=adamgeorgio06-20&linkId=1905836bc389340e84fbcf91eef852ec", 
            "name": "Holes"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Mark-Z.-Danielewski/e/B000APTSK8/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=d5816df8317c7f6776b0db249ac4a628", 
            "name": "Mark Z. Danielewski"
	}, 
	"title": {
            "link": "https://www.amazon.com/House-Leaves-Mark-Z-Danielewski/dp/0375703764/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919750&sr=1-1&keywords=House+of+Leaves&linkCode=sl1&tag=adamgeorgio06-20&linkId=b334e4b936992c7d81d5193713317158", 
            "name": "House of Leaves"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Neil-Strauss/e/B001H6NT1I/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=aae48ae345d779ec402759c80b9a132e", 
            "name": "Neil Strauss"
	}, 
	"title": {
            "link": "https://www.amazon.com/Game-Penetrating-Secret-Society-Artists/dp/0060554738/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919767&sr=1-3&keywords=the+game&linkCode=sl1&tag=adamgeorgio06-20&linkId=b22da9ae97124dc9f5caf732176d47dd", 
            "name": "The Game"
	}
    }, 
    {
	"tags": [
            "non-fiction", 
            "philosophy"
	], 
	"author": {
            "link": "http://www.amazon.com/Sam-Harris/e/B001H6UFQ0/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=55f92f21d0c16ae89afbae2888a2e9ef", 
            "name": "Sam Harris"
	}, 
	"title": {
            "link": "https://www.amazon.com/Moral-Landscape-Science-Determine-Values/dp/143917122X/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919797&sr=1-1&keywords=The+Moral+Landscape&linkCode=sl1&tag=adamgeorgio06-20&linkId=9b1079e5f09226a3c50d93d0c2450f5d", 
            "name": "The Moral Landscape"
	}
    }, 
    {
	"tags": [
            "non-fiction", 
            "religion"
	], 
	"author": {
            "link": "http://www.amazon.com/Sam-Harris/e/B001H6UFQ0/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=55f92f21d0c16ae89afbae2888a2e9ef", 
            "name": "Sam Harris"
	}, 
	"title": {
            "link": "https://www.amazon.com/End-Faith-Religion-Terror-Future/dp/0393327655/ref=as_li_ss_tl?ie=UTF8&ref_=asap_bc&linkCode=sl1&tag=adamgeorgio06-20&linkId=8f9a9c92112f9be72e759797bf6e141f", 
            "name": "The End of Faith"
	}
    }, 
    {
	"tags": [
            "non-fiction", 
            "philosophy"
	], 
	"author": {
            "link": "http://www.amazon.com/Sam-Harris/e/B001H6UFQ0/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=55f92f21d0c16ae89afbae2888a2e9ef", 
            "name": "Sam Harris"
	}, 
	"title": {
            "link": "https://www.amazon.com/Free-Will-Sam-Harris/dp/1451683405/ref=as_li_ss_tl?ie=UTF8&ref_=asap_bc&linkCode=sl1&tag=adamgeorgio06-20&linkId=222ac94601995f480343067b0b62c0bc", 
            "name": "Free Will"
	}
    }, 
    {
	"tags": [
            "non-fiction", 
            "philosophy"
	], 
	"author": {
            "link": "http://www.amazon.com/Shunryu-Suzuki/e/B000AP88YU/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=b6c2d01b81c18bbecf8b66a91d51f5f2", 
            "name": "Shunryu Suzuki"
	}, 
	"title": {
            "link": "https://www.amazon.com/Zen-Mind-Beginners-Shunryu-Suzuki/dp/1590308492/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919853&sr=1-1&keywords=zen+mind+beginners+mind&linkCode=sl1&tag=adamgeorgio06-20&linkId=764a0de9e1b0d7c6e81ccf104cd1184d", 
            "name": "Zen Mind, Beginner's Mind"
	}
    }, 
    {
	"tags": [
            "non-fiction", 
            "philosophy"
	], 
	"author": {
            "link": "http://www.amazon.com/Steve-Hagen/e/B001ILMDIW/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=0099ffc6d0e60f4187ebf2b166c611aa", 
            "name": "Steve Hagen"
	}, 
	"title": {
            "link": "https://www.amazon.com/Buddhism-Plain-Simple-Steve-Hagen/dp/0767903323/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919871&sr=1-1&keywords=Buddhism+Plain+and+Simple&linkCode=sl1&tag=adamgeorgio06-20&linkId=f2ba78fbd8e239d29d3515405d454875", 
            "name": "Buddhism Plain and Simple"
	}
    }, 
    {
	"tags": [
            "non-fiction", 
            "philosophy"
	], 
	"author": {
            "link": "https://www.amazon.com/s?ie=UTF8&page=1&rh=n%3A283155%2Cp_27%3AWilliam%20Hart&tag=adamgeorgio06-20", 
            "name": "William Hart"
	}, 
	"title": {
            "link": "https://www.amazon.com/Art-Living-Vipassana-Meditation/dp/0060637242/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919892&sr=1-1&keywords=The+Art+of+Living:+Vipassana+Meditation&linkCode=sl1&tag=adamgeorgio06-20&linkId=57fcdced826d854c713c6719a5c1d198", 
            "name": "The Art of Living: Vipassana Meditation"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "https://www.amazon.com/s?ie=UTF8&page=1&rh=n%3A283155%2Cp_27%3AHermann%20Hesse&tag=adamgeorgio06-20", 
            "name": "Herman Hesse"
	}, 
	"title": {
            "link": "https://www.amazon.com/Siddhartha-Hermann-Hesse/dp/1613823789/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919916&sr=1-1&keywords=Siddhartha&linkCode=sl1&tag=adamgeorgio06-20&linkId=870dd19aa6a503074da2e6ce7ac15f99", 
            "name": "Siddhartha"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Samuel-Beckett/e/B000AQ2DVS/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=96893e67499357d8a6447be71541b03f", 
            "name": "Samuel Beckett"
	}, 
	"title": {
            "link": "https://www.amazon.com/Waiting-Godot-Tragicomedy-Two-Acts/dp/080214442X/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919940&sr=1-1&keywords=waiting+for+godot&linkCode=sl1&tag=adamgeorgio06-20&linkId=6f6e736320bee6a4319e5c8dc7068ff0", 
            "name": "Waiting for Godot"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Albert-Camus/e/B000AQ541E/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=b7ca8a487e6b0a9d3855231a53745d21", 
            "name": "Albert Camus"
	}, 
	"title": {
            "link": "https://www.amazon.com/Stranger-Albert-Camus/dp/0679720200/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919966&sr=1-1&keywords=the+stranger&linkCode=sl1&tag=adamgeorgio06-20&linkId=462c6719a1760f95eb0ec4d656306e90", 
            "name": "The Stranger"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Daniel-Tammet/e/B001JS1JT8/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=908054db37e7ad04253d944e4ddc2e8e", 
            "name": "Daniel Tammet"
	}, 
	"title": {
            "link": "https://www.amazon.com/Embracing-Wide-Sky-Across-Horizons/dp/1416576185/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467919989&sr=1-1&keywords=Embracing+the+Wide+Sky&linkCode=sl1&tag=adamgeorgio06-20&linkId=d219c69fdb7d2e96cc7fbd547e78b2f7", 
            "name": "Embracing the Wide Sky"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Daniel-Tammet/e/B001JS1JT8/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=908054db37e7ad04253d944e4ddc2e8e", 
            "name": "Daniel Tammet"
	}, 
	"title": {
            "link": "https://www.amazon.com/Born-Blue-Day-Extraordinary-Autistic/dp/1416549013/ref=as_li_ss_tl?ie=UTF8&ref_=asap_bc&linkCode=sl1&tag=adamgeorgio06-20&linkId=8e25db16d9f956ef99c6c19de178bf02", 
            "name": "Born of a Blue Day"
	}
    }, 
    {
	"tags": [
            "novel", 
            "philosophy"
	], 
	"author": {
            "link": "http://www.amazon.com/Robert-M.-Pirsig/e/B000AP5XN4/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=ca058f6f914f170502123a25f8caa096", 
            "name": "Robert M. Pirsig"
	}, 
	"title": {
            "link": "https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060589469/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467920027&sr=1-1&keywords=zen+and+the+art+of+motorcycle+maintenance&linkCode=sl1&tag=adamgeorgio06-20&linkId=5ecbbdf7cce56d6a2c274ef349d157af", 
            "name": "Zen and the Art of Motorcycle Maintenance"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "http://www.amazon.com/Isaac-Asimov/e/B003RY2ISS/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=78135beb1f59875a807a9ac575a91da1", 
            "name": "Isaac Asimov"
	}, 
	"title": {
            "link": "https://www.amazon.com/I-Robot-Isaac-Asimov/dp/055338256X/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467920049&sr=1-1&keywords=i+robot&linkCode=sl1&tag=adamgeorgio06-20&linkId=d2f5d2e325c4ef2f629741fc5ccc133e", 
            "name": "I,Robot"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Benjamin-Franklin/e/B00Y83DXHM/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=7101ee7817223305ee37c4a13c2003d5", 
            "name": "Benjamin Franklin"
	}, 
	"title": {
            "link": "https://www.amazon.com/Autobiography-Benjamin-Franklin-Thrift-Editions/dp/0486290735/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467920081&sr=1-3&keywords=benjamin+franklin&linkCode=sl1&tag=adamgeorgio06-20&linkId=c23ee871ca3171dc01d8920970d2eb66", 
            "name": "The Autobigraphy of Benjamin Franklin"
	}
    }, 
    {
	"tags": [
            "non-fiction", 
            "business"
	], 
	"author": {
            "link": "http://www.amazon.com/Seth-Godin/e/B000AP9EH0/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=796a31be4ffee3d47ac14103ffec7868", 
            "name": "Seth Godin"
	}, 
	"title": {
            "link": "https://www.amazon.com/Linchpin-Are-Indispensable-Seth-Godin/dp/1591844096?tag=adamgeorgiou06-20", 
            "name": "Linchpin"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Tracy-Kidder/e/B00NSS3FBM/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=bc9c5e1de3a8e314bdb599710e46e5ab", 
            "name": "Tracy Kidder"
	}, 
	"title": {
            "link": "https://www.amazon.com/Soul-New-Machine-Tracy-Kidder/dp/0316491977/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1467920126&sr=1-1&keywords=the+soul+of+a+new+machine&linkCode=sl1&tag=adamgeorgio06-20&linkId=f249faff590e996a4daa3bcfe8d41cee", 
            "name": "The Soul of a New Machine"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Daniel-H.-Pink/e/B001IXS3PC/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=b177b1383187cacd4aa80df530bd6149", 
            "name": "Daniel Pink"
	}, 
	"title": {
            "link": "https://www.amazon.com/Drive-Surprising-Truth-About-Motivates/dp/1594484805?tag=adamgeorgiou06-20", 
            "name": "Drive"
	}
    }, 
    {
	"tags": [
            "non-fiction", 
            "technical"
	], 
	"author": {
            "name": "Joseph M. Williams and Joseph Bizup"
	}, 
	"title": {
            "link": "http://amzn.to/29tUToe?tag=adamgeorgiou06-20", 
            "name": "Style: Lessons in Clarity and Grace"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Stephen-Hawking/e/B000AP5X0M/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=f6a101d7431e26b52d4a9b19da71408e", 
            "name": "Stephen Hawking"
	}, 
	"title": {
            "link": "https://www.amazon.com/Grand-Design-Stephen-Hawking/dp/055338466X?tag=adamgeorgiou06-20", 
            "name": "The Grand Design"
	}
    }, 
    {
	"tags": [
            "graphic-novel"
	], 
	"author": {
            "link": "", 
            "name": "Alan Moore and Dave Gibbons"
	}, 
	"title": {
            "link": "http://amzn.to/29pJ9pg?tag=adamgeorgiou06-20", 
            "name": "Watchman"
	}
    }, 
    {
	"tags": [
            "non-fiction"
	], 
	"author": {
            "link": "http://www.amazon.com/Bill-Bryson/e/B000APXTVM/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=adamgeorgio06-20&linkId=be527726d91d54fa8c5a140cd94ac498", 
            "name": "Bill Bryson"
	}, 
	"title": {
            "link": "https://www.amazon.com/Short-History-Nearly-Everything/dp/076790818X?tag=adamgeorgiou06-20", 
            "name": "A Short History of Nearly Everything"
	}
    }, 
    {
	"tags": [
            "novel"
	], 
	"author": {
            "link": "https://www.amazon.com/s?ie=UTF8&page=1&rh=i%3Aaps%2Ck%3AEliezer%20Yudkowsky&tag=adamgeorgio06-20", 
            "name": "Eliezer Yudkowsky"
	}, 
	"title": {
            "link": "http://hpmor.com/?tag=adamgeorgiou06-20", 
            "name": "Harry Potter and the Methods of Rationality"
	}
    }
];

