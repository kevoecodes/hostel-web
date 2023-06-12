import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Config } from '../utils/Config';
const { Dragger } = Upload;

const FilesUploader = ({ setFileNames }) => {
    const props = {
        name: 'file',
        multiple: true,
        action: Config.apiURL + 'api/v1/upload-file',
        onChange(info) {
            console.log(info);
            const { status, response } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                setFileNames((prevState) => [...prevState, { file_name: response.name }]);
                message.success(`${info.file.name} file uploaded successfully.`).then();
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`).then();
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        }
    };

    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
            </p>
        </Dragger>
    );
};
export default FilesUploader;
