import { Steps } from 'antd';
import { BL_CHARGE_STATUS } from '../utils/constants';
import { renderDateTime } from '../functions/common';

const RequestStepper = ({ request }) => {
    return (
        <>
            <Steps
                progressDot
                current={request.status}
                direction="vertical"
                items={[
                    {
                        title: 'Requested',
                        description: (
                            <>
                                Requested by{' '}
                                <span style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    {request.created_by.first_name} {request.created_by.last_name}
                                </span>{' '}
                                at <span style={{ fontWeight: 'bold' }}> {renderDateTime(request.created_at)} </span>
                            </>
                        )
                    },
                    {
                        title: 'Verified',
                        description: (
                            <>
                                {(request.status >= BL_CHARGE_STATUS.VERIFIED) & (request.verified_by !== null) ? (
                                    <>
                                        {' '}
                                        Verified_by{' '}
                                        <span style={{ fontWeight: 'bold' }}>
                                            {' '}
                                            {request.verified_by.first_name} {request.verified_by.last_name}
                                        </span>{' '}
                                        at <span style={{ fontWeight: 'bold' }}> {renderDateTime(request.verified_at)} </span>{' '}
                                    </>
                                ) : (
                                    'Not verified'
                                )}
                            </>
                        )
                    },
                    {
                        title: 'Approved',
                        description: (
                            <>
                                {request.status >= BL_CHARGE_STATUS.APPROVED && request.approved_by !== null ? (
                                    <>
                                        {' '}
                                        Approved by{' '}
                                        <span style={{ fontWeight: 'bold' }}>
                                            {' '}
                                            {request.approved_by.first_name} {request.approved_by.last_name}
                                        </span>{' '}
                                        at <span style={{ fontWeight: 'bold' }}> {renderDateTime(request.approved_at)} </span>
                                    </>
                                ) : (
                                    'Not Aprroved'
                                )}
                            </>
                        )
                    },
                    {
                        title: 'Paid',
                        description: (
                            <>
                                {request.status === BL_CHARGE_STATUS.PAID && request.paid_by !== null ? (
                                    <>
                                        {' '}
                                        Payments done by{' '}
                                        <span style={{ fontWeight: 'bold' }}>
                                            {' '}
                                            {request.paid_by.first_name} {request.paid_by.last_name}
                                        </span>{' '}
                                        at <span style={{ fontWeight: 'bold' }}> {renderDateTime(request.paid_at)} </span>
                                    </>
                                ) : (
                                    'No payments done'
                                )}
                            </>
                        )
                    }
                ]}
            />
        </>
    );
};

export default RequestStepper;
