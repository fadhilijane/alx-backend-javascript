export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  const firstStatement = 'it was the seventh-highest income county in the United States,';
  const secondStatement = 'with a per capita personal income of';
  const thirdStatement = 'As of 2015, San Francisco proper had a GDP of';

  return `As of ${year}, ${firstStatement} ${secondStatement} ${budget.income}. ${thirdStatement} ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
