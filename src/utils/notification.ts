import useNotificationStore from "../stores/useNotificationStore";

export function notify(newNotification: {
  id?: string
  type?: string
  message: string
  description?: string
  txid?: string
}) {
  const {
    notifications,
    set: setNotificationStore,
  } = useNotificationStore.getState()

  setNotificationStore((state: { notifications: any[] }) => {
    state.notifications = [...notifications,
      {
        id: newNotification.id  === undefined ? new Date(Date.now()) : newNotification.id,
        txId: newNotification.txid,
        message: newNotification.message,
        description: newNotification.description  === undefined ? '' : newNotification.description,
        type: newNotification.type === undefined ? 'info' : newNotification.type,
      }
    ]
    //  [
      // ...notifications,
      // { type: 'success', ...newNotification },
    // ]
  })
}
