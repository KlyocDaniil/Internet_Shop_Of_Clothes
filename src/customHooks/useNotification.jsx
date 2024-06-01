import { useEffect } from 'react';
import { notification } from 'antd';

const NOTIFICATION_DURATION = 3;

const useNotification = () => {
    const showNotification = (type, message, description) => {
        notification[type]({
            message,
            description,
            duration: NOTIFICATION_DURATION,
        });
    };

    useEffect(() => {
        return () => {
            notification.destroy();
        };
    }, []);

    return {
        success: (message, description) => showNotification('success', message, description),
        error: (message, description) => showNotification('error', message, description),
        info: (message, description) => showNotification('info', message, description),
    };
};

export default useNotification;