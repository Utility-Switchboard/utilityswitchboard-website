interface navigationProps {
   category: string,
   icon: string,
   url?: string,
   sub_categories: {
      title: string,
      icon: string,
      links?: {
         text: string,
         url: string
      }[],
      all_url?: string,
      all_text?: string
   }[]
}

const extended_navigation_lists: navigationProps[] = [
   {
      category: "Gas & electricity",
      icon: "fa-solid fa-bolt",
      sub_categories: [
         {
            title: "Popular guides",
            icon: "fa-solid fa-book",
            links: [
               {
                  text: "Should I have a smart meter?",
                  url: "/gas-electricity/guides/meters/smart-meters/"
               },
               {
                  text: "How to find your MSN",
                  url: "/gas-electricity/guides/meters/msn/"
               },
               {
                  text: "Switching to renewable energy",
                  url: "/gas-electricity/guides/environment/renewable-energy/best-providers/"
               },
               {
                  text: "Calculate your energy usage",
                  url: "/gas-electricity/guides/tariffs/average-usage/"
               },
               {
                  text: "Help topping up key / card",
                  url: "/gas-electricity/guides/meters/topping-up-payg/"
               },
               {
                  text: "Change the account holder",
                  url: "/gas-electricity/guides/switching/change-account-holder/"
               }
            ],
            all_url: "/gas-electricity/guides/",
            all_text: "See all guides"
         },
         {
            title: "Providers",
            icon: "fa-solid fa-bolt",
            links: [
               {
                  text: "British Gas",
                  url: "/gas-electricity/providers/british-gas/"
               },
               {
                  text: "EDF Energy",
                  url: "/gas-electricity/providers/edf-energy/"
               },
               {
                  text: "SSE",
                  url: "/gas-electricity/providers/sse/"
               },
               {
                  text: "Scottish Power",
                  url: "/gas-electricity/providers/scottish-power/"
               },
               {
                  text: "Npower",
                  url: "/gas-electricity/providers/npower/"
               },
               {
                  text: "Eon",
                  url: "/gas-electricity/providers/eon/"
               }
            ],
            all_url: "/gas-electricity/providers/",
            all_text: "See all providers"
         }
      ]
   },
   {
      category: "TV & Broadband",
      icon: "fa-solid fa-wifi",
      sub_categories: [
         {
            title: "Popular guides",
            icon: "fa-solid fa-book",
            links: [
               {
                  text: "How does line rental work?",
                  url: "/tv-broadband/guides/deals/line-rental/"
               },
               {
                  text: "Understanding your broadband bill",
                  url: "/tv-broadband/guides/billing/example-bill"
               },
               {
                  text: "Sky Sports",
                  url: "/tv-broadband/providers/sky/tv/sky-sports"
               },
               {
                  text: "Do I need a TV licence?",
                  url: "/tv-broadband/guides/deals/tv-licence"
               },
               {
                  text: "Download, upload and ping?",
                  url: "/tv-broadband/guides/technical/upload-download-ping/"
               },
               {
                  text: "Early cancellation fees",
                  url: "/tv-broadband/guides/switching/early-termination-fees"
               }
            ],
            all_url: "/tv-broadband/guides/",
            all_text: "See all guides"
         },
         {
            title: "Providers",
            icon: "fa-solid fa-wifi",
            links: [
               {
                  text: "BT",
                  url: "/tv-broadband/providers/bt/"
               },
               {
                  text: "Sky",
                  url: "/tv-broadband/providers/sky"
               },
               {
                  text: "Virgin Media",
                  url: "/tv-broadband/providers/virgin-media"
               },
               {
                  text: "TalkTalk",
                  url: "/tv-broadband/providers/talktalk"
               },
               {
                  text: "Hyperoptic",
                  url: "/tv-broadband/providers/"
               },
               {
                  text: "Plusnet",
                  url: "/tv-broadband/providers/"
               }
            ],
            all_url: "/tv-broadband/providers/",
            all_text: "See all providers"
         }
      ]
   },
   {
      category: "News",
      icon: "fa-solid fa-newspaper",
      url: "/news",
      sub_categories: []
   }
]

export default extended_navigation_lists