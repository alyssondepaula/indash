export interface IQuotesSupport {
    name: string;
    value: string;
}

const DATA: IQuotesSupport[] = [
      {
        name: 'amazon',
        value: 'AMZN',
      },
      {
        name: 'apple',
        value: 'AAPL',
      },
      {
        name: 'adobe',
        value: 'ADBE',
      },
      {
        name: 'facebook',
        value: 'FB',
      },
      {
        name: 'microsoft',
        value: 'MSFT',
      },
      {
        name: 'starbucks',
        value: 'SBUX',
      },
      {
        name: 'twitter',
        value: 'TWTR',
      },

]

export function getQuoteSupport(name: string): string | undefined  {


    const find = DATA.find(item => name == item.name )
    

    return find?.value;
}