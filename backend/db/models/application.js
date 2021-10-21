const application = (sequelize, DataTypes) => {
  const Application = sequelize.define(
    'application',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      listing_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'listings',
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: false,
      },
      /**
       * 0=Rejected, 1=Applied, 2=Approved
       */
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      /**
       * 0=Not Interested, 1=No Feedback, 2=Interested
       */
      // creator_interest: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   defaultValue: 1,
      // },
      // application_method: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   defaultValue: 'applied',
      //   validate: { isIn: [['applied', 'invited']] },
      // },
      // UID from firebase decoded token
      // uid: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // message: {
      //   type: DataTypes.TEXT,
      //   allowNull: true,
      // },
      // submitter: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      // public_id: {
      //   type: DataTypes.UUID,
      //   allowNull: false,
      //   defaultValue: DataTypes.UUIDV4,
      // },
      // Notification after application creation.
      // -n for n failed attempt to send email notification
      // 0 for no attempt to send email notification
      // 1 if successfully sent an email notification
      notified_creator: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      // same as notified_creator but for notification to company
      // notified_company: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   defaultValue: 0,
      // },
      // has_feedback: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: false,
      //   defaultValue: false,
      // },
      // feedback_reject: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: true,
      // },
      // feedback_message: {
      //   type: DataTypes.TEXT,
      //   allowNull: true,
      // },
      // committed: {
      //   type: 'TIMESTAMP',
      //   defaultValue: null,
      // },
      // posted: {
      //   type: 'TIMESTAMP',
      //   defaultValue: null,
      // },
      // sent_committed_email: {
      //   type: 'TIMESTAMP',
      //   defaultValue: null,
      // },
      // sent_posted_email: {
      //   type: 'TIMESTAMP',
      //   defaultValue: null,
      // },
      // same as notified_creator but for notification sent after company
      // submits feedback.
      // feedback_notified_creator: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   defaultValue: 0,
      // },
      // same as notified_company but for notification sent after company
      // submits feedback.
      // feedback_notified_company: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   defaultValue: 0,
      // },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      // updatedAt: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      // },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['id'],
        },
        {
          unique: true,
          fields: ['listing_id', 'user_id'],
        },
        {
          unique: false,
          fields: ['user_id'],
          name: 'user_id_application_index',
        },
        {
          unique: false,
          fields: ['listing_id'],
        },
      ],
    }
  )
  return Application
}

module.exports = application
