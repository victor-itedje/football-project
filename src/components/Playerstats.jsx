import React from 'react';

const players = [
  {
    name: 'Cristiano Ronaldo',
    goals: 32,
    assists: 22,
    rank1: 8,
    rank2: 6,
    rank3: 3,
    matches: 27,
    yellow: 3,
    red: 0,
  },
  {
    name: 'Lionel Messi',
    goals: 26,
    assists: 29,
    rank1: 2,
    rank2: 5,
    rank3: 3,
    matches: 28,
    yellow: 1,
    red: 0,
  },
  {
    name: 'Neymar Jr',
    goals: 15,
    assists: 12,
    rank1: 3,
    rank2: 6,
    rank3: 1,
    matches: 32,
    yellow: 2,
    red: 0,
  },
  {
    name: 'Kylian Mbappé',
    goals: 33,
    assists: 18,
    rank1: 8,
    rank2: 6,
    rank3: 3,
    matches: 27,
    yellow: 3,
    red: 0,
  },
  {
    name: 'Robert Lewandowski',
    goals: 19,
    assists: 7,
    rank1: 2,
    rank2: 5,
    rank3: 3,
    matches: 28,
    yellow: 1,
    red: 0,
  },
];

const PlayerStatsTable = () => {
  return (
    <div className="p-4 w-[100%] mt-[50px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Player Statistics</h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left">Player</th>
              <th className="p-3">Goals</th>
              <th className="p-3">Assists</th>
              <th className="p-3">Ranking - 1</th>
              <th className="p-3">Ranking - 2</th>
              <th className="p-3">Ranking - 3</th>
              <th className="p-3">Matches</th>
              <th className="p-3">Yellow</th>
              <th className="p-3">Red</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="p-3 font-medium">{player.name}</td>
                <td className="p-3 text-center">{player.goals}</td>
                <td className="p-3 text-center">{player.assists}</td>
                <td className="p-3 text-center">{player.rank1}</td>
                <td className="p-3 text-center">{player.rank2}</td>
                <td className="p-3 text-center">{player.rank3}</td>
                <td className="p-3 text-center">{player.matches}</td>
                <td className="p-3 text-center">{player.yellow}</td>
                <td className="p-3 text-center">{player.red}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {players.map((player, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-2">{player.name}</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div><strong>Goals:</strong> {player.goals}</div>
              <div><strong>Assists:</strong> {player.assists}</div>
              <div><strong>Ranking 1:</strong> {player.rank1}</div>
              <div><strong>Ranking 2:</strong> {player.rank2}</div>
              <div><strong>Ranking 3:</strong> {player.rank3}</div>
              <div><strong>Matches:</strong> {player.matches}</div>
              <div><strong>Yellow Cards:</strong> {player.yellow}</div>
              <div><strong>Red Cards:</strong> {player.red}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerStatsTable;
