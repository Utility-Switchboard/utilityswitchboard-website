interface queryProps {
   name: string,
   content: string,
   guide_url: string
}

const common_queries_list: queryProps[] = [
   {
      name: "I've lost my card or key",
      content: "When you lose your gas card or electricity key, you will need to order a new one from your supplier. You can also get a code that will allow you to buy a temporary card from a local shop, this means you could be topping up again in a matter of hours. If you have a smart meter, remember that you can top up online, too.",
      guide_url: "/gas-electricity/guides/meters/topping-up-payg#new-key-card"
   },
   {
      name: "My WiFi is down",
      content: "If your WiFi is down, there could be a number of reasons why this is. One of the most common and easy fixes is to reset your modem and give it a minute or two to cool down. Often times a glitch can be fixed by this simple trick. However, if that doesn't work, it may be local area outage or something you need to contact your provider about.",
      guide_url: "/tv-broadband/guides"
   },
   {
      name: "Warm Home Discount",
      content: "The Warm Home Discount is a £140 discount for your energy bills during the winter months for those who need it most financially. There are a number of eligibility criteria, primarily based around financial income and pensionable age. Check the full guide to see if you're eligible or find alternative ways to save.",
      guide_url: "/gas-electricity/guides/schemes/warm-home-discount"
   },
   {
      name: "I'm moving house",
      content: "Moving house can be a stressful experience. Sorting out your utility bills doesn't need to be, but there are a few things that are recommended to ensure that you don't get overcharged, such as opening and closing energy meter readings, advance-organising your new home's utility plans and letting your supplier(s) know that you're moving.",
      guide_url: "/tv-broadband/guides/switching/moving-house"
   }
]

export default common_queries_list