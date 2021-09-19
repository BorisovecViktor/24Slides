import React from 'react';
import MaterialTable from 'material-table';

const Table = () => {
  const data = [
    {
      id: 1,
      user: {
        name: "Implement Customer",
        hasCredits: false,
        suspended: true,
      },
      slides: 11,
      status: "Open",
      revisions: 0,
      price: "$0",
      manager: "Project manager",
      team: "-",
      deadline: "2021-09-11T00:00:00.000000Z",
      subscribed: true,
    },
    {
      id: 2,
      user: {
        name: "Implement Customer",
        hasCredits: true,
        suspended: false,
      },
      slides: 22,
      status: "New",
      revisions: 0,
      price: "$222",
      manager: "Project manager",
      team: "Alpaca",
      deadline: "2021-09-05T00:00:00.000000Z",
      subscribed: false,
    },
    {
      id: 3,
      user: {
        name: "Implement Customer",
        hasCredits: false,
        suspended: true,
      },
      slides: 33,
      status: "First draft in progress",
      revisions: 0,
      price: "$1000",
      manager: "Project manager",
      team: "Smash",
      deadline: "2021-08-30T00:00:00.000000Z",
      subscribed: false,
    },
    {
      id: 4,
      user: {
        name: "Implement Customer",
        hasCredits: false,
        suspended: false,
      },
      slides: 111,
      status: "Approved",
      revisions: 0,
      price: "$800",
      manager: "Project manager",
      team: "Alpaca",
      deadline: "2021-09-22T00:00:00.000000Z",
      subscribed: true,
    },
    {
      id: 5,
      user: {
        name: "Implement Customer",
        hasCredits: true,
        suspended: false,
      },
      slides: 222,
      status: "First draft in progress",
      revisions: 0,
      price: "$400",
      manager: "Project manager",
      team: "Alpaca",
      deadline: "2021-08-22T00:00:00.000000Z",
      subscribed: false,
    },
  ];

  const preparedData = data.map(item => {
    return {
      ...item,
      deadline: item.deadline.slice(0, 10)
    }
  })

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'Castomer', field: 'user.name' },
          { title: 'Slides', field: 'slides' },
          { title: 'Status', field: 'status' },
          { title: 'Price', field: 'price' },
          { title: 'Manager', field: 'manager' },
          { title: 'Team', field: 'team' },
          { title: 'Deadline', field: 'deadline' },
          { title: 'Subscribed', field: 'subscribed' },
        ]}
        data={preparedData}
        options={{
          search: false,
          paging: false,
        }}
      />
    </div>
  );
};

export default Table;