import React, { Fragment } from "react";
import { Modal, Button } from "antd";

const NewsModal = ({ isModalVisible, setIsModalVisible, title, description, url }) => {
    
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Fragment>
            <Modal
                title={title}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
				footer={[
					<Button key="cancel" type="default" onClick={handleOk}>
						Cancel
					</Button>,
					<Button
						key="link"
						href={url}
						target="_blank"
						type="primary"
						onClick={handleOk}
					>Leer Noticia</Button>
				]}
            >
                <p>{description}</p>
            </Modal>
        </Fragment>
    );
};

export default NewsModal;
