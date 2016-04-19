/*|-----------------------------------------------------------------------------
 *|            This source code is provided under the Apache 2.0 license      --
 *|  and is provided AS IS with no warranty or guarantee of fit for purpose.  --
 *|                See the project's LICENSE.md for details.                  --
 *|           Copyright Thomson Reuters 2015. All rights reserved.            --
 *|-----------------------------------------------------------------------------
 */

#ifndef __thomsonreuters_ema_access_StatusMsgDecoder_h
#define __thomsonreuters_ema_access_StatusMsgDecoder_h

#include "EmaPool.h"
#include "MsgDecoder.h"
#include "StatusMsg.h"
#include "EmaStringInt.h"
#include "EmaBufferInt.h"

namespace thomsonreuters {

namespace ema {

namespace access {

class StatusMsgDecoder : public MsgDecoder
{
public :

	StatusMsgDecoder();

	~StatusMsgDecoder();

	bool setRsslData( UInt8 , UInt8 , RsslMsg* , const RsslDataDictionary* );

	bool setRsslData( UInt8 , UInt8 , RsslBuffer* , const RsslDataDictionary* , void* );

	bool setRsslData( RsslDecodeIterator* , RsslBuffer* );

	bool hasMsgKey() const;

	bool hasName() const;

	bool hasNameType() const;

	bool hasServiceId() const;

	bool hasServiceName() const;

	bool hasId() const;

	bool hasFilter() const;

	bool hasAttrib() const;

	bool hasPayload() const;

	bool hasExtendedHeader() const;

	bool hasState() const;

	Int32 getStreamId() const;

	UInt16 getDomainType() const;

	const EmaString& getName() const;

	UInt8 getNameType() const;

	UInt32 getServiceId() const;

	const EmaString& getServiceName() const;

	Int32 getId() const;

	UInt32 getFilter() const;

	const EmaBuffer& getExtendedHeader() const;

	bool hasItemGroup() const;

	bool hasPermissionData() const;

	bool hasPublisherId() const;

	const OmmState& getState() const;

	const EmaBuffer& getItemGroup() const;

	const EmaBuffer& getPermissionData() const;

	UInt32 getPublisherIdUserId() const;

	UInt32 getPublisherIdUserAddress() const;

	bool getClearCache() const;

	bool getPrivateStream() const;

	void setServiceName( const char* , UInt32 , bool nullTerm = true );

	const EmaBuffer& getHexBuffer() const;

	const RsslBuffer& getRsslBuffer() const;

	OmmError::ErrorCode getErrorCode() const;

private :

	void setStateInt() const;

	RsslMsg						_rsslMsg;

	RsslMsg*					_pRsslMsg;

	mutable EmaStringInt		_name;

	mutable EmaStringInt		_serviceName;

	mutable EmaBufferInt		_extHeader;

	mutable EmaBufferInt		_permission;

	mutable EmaBufferInt		_itemGroup;

	mutable OmmState			_state;

	mutable EmaBufferInt		_hexBuffer;

	mutable bool				_serviceNameSet;

	mutable bool				_stateSet;

	UInt8						_rsslMajVer;

	UInt8						_rsslMinVer;

	OmmError::ErrorCode			_errorCode;
};

class StatusMsgDecoderPool : public DecoderPool< StatusMsgDecoder >
{
public :

	StatusMsgDecoderPool( unsigned int size = 5 ) : DecoderPool< StatusMsgDecoder >( size ) {};

	~StatusMsgDecoderPool() {}

private :

	StatusMsgDecoderPool( const StatusMsgDecoderPool& );
	StatusMsgDecoderPool& operator=( const StatusMsgDecoderPool& );
};

}

}

}

#endif // __thomsonreuters_ema_access_RespMsgDecoder_h
