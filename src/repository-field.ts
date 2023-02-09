type Field = {
	type: 'field';
	path: string;
	unsetIfEmpty?: boolean;
	default?: any;
	autoId?: boolean;
};

type OneToOneJoin = {
	type: 'oneToOne';
	path: string;
	toRepository?: string;
	toPath: string;
	embededDocumentField?: string;
	as?: string;
	unsetIfEmpty?: boolean;
	default?: any;
};

type OneToManyJoin = {
	type: 'oneToMany';
	path: string;
	toRepository?: string;
	toPath: string;
	as?: string;
	unsetIfEmpty?: boolean;
	default?: any;
};

export type RepositoryField = Field | OneToOneJoin | OneToManyJoin;
